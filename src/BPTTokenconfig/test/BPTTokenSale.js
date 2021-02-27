var BPTToken = artifacts.require("./BPTToken.sol");
var BPTTokenSale = artifacts.require("./BPTTokenSale.sol");

contract('BPTTokenSale', function(accounts){
  var tokenSaleInstance;
  var tokenInstance;
  var admin = accounts[0];
  var tokenPrice = 1000000000000000;
  var buyer = accounts[1];
  var tokensAvailable = 750000000000;
  var numberOfTokens;
  
  it('initializes the contract with the correct values', function(){
    return BPTTokenSale.deployed().then(function(instance){
      tokenSaleInstance = instance;
      return tokenSaleInstance.address
    }).then(function(address){
      assert.notEqual(address, 0x0, 'has contract address');
      return tokenSaleInstance.tokenContract();
    }).then(function(address){
      assert.notEqual(address, 0x0, 'has token contract address');
      return tokenSaleInstance.tokenPrice();
    }).then(function(price){
      assert.equal(price, tokenPrice, 'token price is correct');
    });
  });

  it('facilitates token buying', function(){
    return BPTToken.deployed().then(function(instance){
      tokenInstance = instance;
      return BPTTokenSale.deployed();
    }).then(function(instance){
      tokenSaleInstance = instance;
      return tokenInstance.transfer(tokenSaleInstance.address, tokensAvailable, { from: admin })
    }).then(function(receipt){
      numberOfTokens = 10;
      return tokenSaleInstance.buyTokens(numberOfTokens, {from: buyer, value: numberOfTokens * tokenPrice})
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, 'triggers one event');
      assert.equal(receipt.logs[0].event, 'Sell', 'should be the "Sell" event');
      assert.equal(receipt.logs[0].args._buyer, buyer, 'logs the account that purchased the tokens');
      assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'logs the number of tokens purchased');
      return tokenSaleInstance.tokensSold();
    }).then(function(amount){
      assert.equal(amount.toNumber(), numberOfTokens, 'increments the number of tokens sold');
      return tokenInstance.balanceOf(buyer);
      }).then(function(balance){
        assert.equal(balance.toNumber(),numberOfTokens);
      return tokenInstance.balanceOf(tokenSaleInstance.address);
      }).then(function(balance){
        assert.equal(balance.toNumber(), tokensAvailable - numberOfTokens);
      return tokenSaleInstance.buyTokens(numberOfTokens, {from: buyer, value: 1});
    }).then(assert.fail).catch(function(error){
      assert(error.message, 'msg.value must equal number of tokens in wei');
      return tokenSaleInstance.buyTokens(800000000000, { from: buyer, value: 1});
    }).then(assert.fail).catch(function(error){
      assert(error.message, 'cannot purchase more tokens than available');
    });
  });

  it('ends token sale', function(){
    return BPTToken.deployed().then(function(instance){
      tokenInstance = instance;
      return BPTTokenSale.deployed();
    }).then(function(instance){
      tokenSaleInstance = instance;
      return tokenSaleInstance.endSale({ from: buyer });
    }).then(assert.fail).catch(function(error){
      assert(error.message , 'must be admin to end sail');
      return tokenSaleInstance.endSale({ from: admin});
    }).then(function(receipt){
      return tokenInstance.balanceOf(admin);
    }).then(function(balance){
      assert.equal(balance.toNumber(), 999999999990, 'returns all unsold BPT tokens to admin')
      balance = web3.eth.getBalance(tokenSaleInstance.address)
      // assert.equal(balance.toNumber(), 0, 'done');
    });
  });
});
