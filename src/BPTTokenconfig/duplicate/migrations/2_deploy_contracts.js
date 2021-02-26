var BPTToken = artifacts.require("./BPTToken.sol");
var BPTTokenSale = artifacts.require("./BPTTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(BPTToken, 1000000000000).then(function(){
    var tokenPrice = 1000000000000000;
    return deployer.deploy(BPTTokenSale, BPTToken.address, tokenPrice);
  });
};
