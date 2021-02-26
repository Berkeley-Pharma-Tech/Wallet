var BPTToken = artifacts.require("./BPTToken.sol");

contract('BPTToken', function(accounts){
  var tokenInstance;

  it('initializes the contract with the correct values', function(){
    return BPTToken.deployed().then(function(instance){
      tokenInstance=instance;
      return tokenInstance.name()
    }).then(function(name){
      assert.equal(name, 'BPT Token', 'has the correct name');
      return tokenInstance.symbol();
    }).then(function(symbol){
      assert.equal(symbol, 'BPT', 'has the correct symbol');
      return tokenInstance.standard();
    }).then(function(standard){
      assert.equal(standard, 'BPT Token v1.0', 'has the correct standard');
    });
  })

  it('allocates the initial supply upon deployment', function(){
    return BPTToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(), 1000000000000, 'sets the total supply to 1,000,000,000,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance){
      assert.equal(adminBalance.toNumber(), 1000000000000, 'it allocates the initial supply to the admin account')
    });
  });

  it('transfers token ownership', function(){
    return BPTToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.transfer.call(accounts[1], 9999999999999999999);    
    }).then(assert.fail).catch(function(error){
      assert(error.message , 'error message must contain revert');
      return tokenInstance.transfer.call(accounts[1],250000000000, {from: accounts[0]});
    }).then(function(success) {
      assert.equal(success, true, 'it returns true');
      return tokenInstance.transfer(accounts[1], 250000000000, {from: accounts[0]});
    }).then(function(receipt){
       assert.equal(receipt.logs.length, 1, 'triggers one event');
      assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event');
      assert.equal(receipt.logs[0].args._from, accounts[0], 'logs the account the tokens are transferred from');
      assert.equal(receipt.logs[0].args._to, accounts[1], 'logs the account the tokens are transferred to');
      assert.equal(receipt.logs[0].args._value, 250000000000, 'logs the transfer amount');
      return tokenInstance.balanceOf(accounts[1]);
    }).then(function(balance){
      assert.equal(balance.toNumber(), 250000000000, 'adds the amount to the receving account');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(balance){
      assert.equal(balance.toNumber(), 750000000000, 'deducts the amount from the sending account');
    });
  });

  it('approves tokens for delegated transfer', function(){
    return BPTToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.approve.call(accounts[1], 100);
    }).then(function(success){
      assert.equal(success, true, 'it returns true');
      return tokenInstance.approve(accounts[1], 100, { from: accounts[0] });
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, 'triggers one event');
      assert.equal(receipt.logs[0].event, 'Approval', 'should be the "Approval" event');
      assert.equal(receipt.logs[0].args._owner, accounts[0], 'logs the account the tokens are authorized by');
      assert.equal(receipt.logs[0].args._spender, accounts[1], 'logs the account the tokens are authorized to');
      assert.equal(receipt.logs[0].args._value, 100, 'logs the transfer amount');
      return tokenInstance.allowance(accounts[0], accounts[1]);
    }).then(function(allowance){
      assert.equal(allowance.toNumber(), 100, 'stores the allowance for delegated transfer');
    });
  });

  it('handles delegated token transfers', function(){
    return BPTToken.deployed().then(function(instance){
      tokenInstance=instance;
      fromAccount = accounts[2];
      toAccount = accounts[3];
      spendingAccount = accounts[4];
      return tokenInstance.transfer(fromAccount, 100, { from: accounts[0]});
    }).then(function(receipt){
      return tokenInstance.approve(spendingAccount, 10, { from: fromAccount});
    }).then(function(receipt){
      return tokenInstance.transferFrom(fromAccount, toAccount, 9999, { from: spendingAccount});
    }).then(assert.fail).catch(function(error){
      assert(error.message, 'cannot transfer value larger than balance');
      return tokenInstance.transferFrom(fromAccount, toAccount, 20, { from: spendingAccount });
    }).then(assert.fail).catch(function(error){
      assert(error.message, 'cannot transfer value larger than approved amount');
      return tokenInstance.transferFrom.call(fromAccount, toAccount, 10, { from: spendingAccount}); 
    }).then(function(success){
      assert.equal(success, true);
      return tokenInstance.transferFrom(fromAccount, toAccount, 10, { from: spendingAccount});
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, 'triggers one event');
      assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event');
      assert.equal(receipt.logs[0].args._from, fromAccount, 'logs the account the tokens are transferred from');
      assert.equal(receipt.logs[0].args._to, toAccount, 'logs the account the tokens are transferred to');
      assert.equal(receipt.logs[0].args._value, 10, 'logs the transfer amount');
      return tokenInstance.balanceOf(fromAccount);
    }).then(function(balance){
      assert.equal(balance.toNumber(), 90, 'deducts the amount from the sending account');
      return tokenInstance.balanceOf(toAccount);
    }).then(function(balance){
      assert.equal(balance.toNumber(), 10, 'adds the amount from the receiving account');
      return tokenInstance.allowance(fromAccount, spendingAccount);
    }).then(function(allowance){
      assert.equal(allowance.toNumber(), 0, 'deducts the amount from the allowance');
    });
  });



});