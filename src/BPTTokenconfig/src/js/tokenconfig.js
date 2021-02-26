App = {

    web3Provider: null,
    contracts: {},
    account: "0x0",
    loading: false,
    tokenPrice: 1000000000,
    tokensSold: 200,
    tokensAvailable: 1000000000000,


    init: function() {
        console.log("App initialized...");
        return App.initWeb3();
    },

    //RESOLVED
    initWeb3: function() {
        const Web3 = require("web3");
        // console.log(window.ethereum);
        if (window.ethereum) {
            App.web3Provider = window.ethereum;
            window.web3 = new Web3(App.web3Provider);
            // console.log(window.web3); This is the provider in Truffle contract
            window.ethereum.enable();
            console.log("Ethereum enabled");
            return App.initContracts();
        } else {
            console.log("Ethereum not enabled");
            alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
        }

        /** OLD CODE FROM FALL TEAM
        //Metamask is no longer injecting web3 so this function will not work. Research will have to be done for an alternative.
        if (typeof web3 !== 'unchecked') {
            //If a web3 instance is already provided by Meta Mask.
            //console.log(web3.currentProvider);
            //let web3 = new Web3(web3.currentProvider);
            //App.web3Provider = web3.currentProvider;

            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            let web3 = new Web3(App.web3Provider);
        } else {
        // Specify default instance if no web3 instance provided
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        let web3 = new Web3(App.web3Provider);
        }
        return App.initContracts();
        */
    },

    initContracts: function(){
        $.getJSON("../../build/contracts/BPTTokenSale.json", function(constructor){
            // console.log(constructor);
            App.contracts.BPTTokenSale = TruffleContract(constructor);
            App.contracts.BPTTokenSale.setProvider(App.web3Provider);
            App.contracts.BPTTokenSale.deployed().then(function(constructor){
                console.log("BPTToken Sale Address: ", constructor.address);
            });
        }).done(function() {
            $.getJSON("../../build/contracts/BPTToken.json", function(constructor) {
                App.contracts.BPTToken = TruffleContract(constructor);
                App.contracts.BPTToken.setProvider(App.web3Provider);
                App.contracts.BPTToken.deployed().then(function(constructor) {
                  console.log("BPTToken Address:", constructor.address);
                });
                console.log("Contracts initialized");
                return App.render();
            });
        });
    },
    render: function() {
        // Load account data
        if(App.loading){
            return;
        }

        web3.eth.getCoinbase(function(err, account) {
            if(err === null) {
              console.log("account: ", account);
              App.account = account;
              $('#accountAddress').html("Your Account: " + account);
            }
          })

        var BPTTokenSaleInstance;
            // Load token sale contract
        App.contracts.BPTTokenSale.deployed().then(function(instance) {
            BPTTokenSaleInstance = instance;
            return BPTTokenSaleInstance.tokenPrice();
        }).then(function(tokenPrice) {
            App.tokenPrice = tokenPrice;

            $('.token-price').html(App.tokenPrice, "ether");

            return BPTTokenSaleInstance.tokensSold();
            //return;
        }).then(function(tokensSold) {
            App.tokensSold = tokensSold.toNumber();
            $('.tokens-sold').html(App.tokensSold);

            $('.tokens-available').html(App.tokensAvailable);

        });

        var progressPercent = (Math.ceil(500000000000) / 1000000000000) * 100;
        $('#progress').css('width', progressPercent + '%');

    }
}


$(function() {
    $(window).load(function() {
        App.init();
    })

});
