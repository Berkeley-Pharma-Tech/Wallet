import React, {useState} from "react";

const TokenConfig = () => {

    const initState = {
        web3Provider: null,
        contracts: {},
        account: "0x0",
        loading: false,
        tokenPrice: 1000000000,
        tokensSold: 200,
        tokensAvailable: 1000000000000
    }
    const [state, setState] = useState(initState)

    const initWeb3 = () => {
        const Web3 = require("web3");
        const TruffleContract = require("truffle-contract");
        // console.log(window.ethereum);
        if (window.ethereum) {
            state.web3Provider = window.ethereum;
            window.web3 = new Web3(state.web3Provider);
            // console.log(window.web3); This is the provider in Truffle contract
            window.ethereum.enable();
            console.log("Ethereum enabled");
            return initContracts(window.web3, TruffleContract);
        } else {
            console.log("Ethereum not enabled");
            alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
        }

    }

    /**RESOLVED
    initWeb3: function() {

         OLD CODE FROM FALL TEAM
        //Metamask is no longer injecting web3 so this function will not work. Research will have to be done for an alternative.
        if (typeof web3 !== 'unchecked') {
            //If a web3 instance is already provided by Meta Mask.
            //console.log(web3.currentProvider);
            //let web3 = new Web3(web3.currentProvider);
            //state.web3Provider = web3.currentProvider;

            state.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            let web3 = new Web3(state.web3Provider);
        } else {
        // Specify default instance if no web3 instance provided
        state.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        let web3 = new Web3(state.web3Provider);
        }
        return state.initContracts();

    },
    */
    const initContracts = (web3, TruffleContract) => {
        // New implementation without Jquery
        fetch("../../build/contracts/BPTTokenSale.json")
        .then((response) => response.json())
        .then((constructor) => {
            state.contracts.BPTTokenSale = TruffleContract(constructor);
            state.contracts.BPTTokenSale.setProvider(state.web3Provider);
            state.contracts.BPTTokenSale.deployed().then(function(constructor){
                console.log("BPTToken Sale Address: ", constructor.address);
            });
        })
        .catch((error) => {
            console.log(error);
        });

        fetch("../../build/contracts/BPTToken.json")
        .then((response) => response.json())
        .then((constructor) => {
            state.contracts.BPTToken = TruffleContract(constructor);
            state.contracts.BPTToken.setProvider(state.web3Provider);
            state.contracts.BPTToken.deployed().then(function(constructor) {
              console.log("BPTToken Address:", constructor.address);
            });
            console.log("Contracts initialized");
            return render(web3);
        })
        .catch((error) => {
            console.log(error);
        });


        /*
        $.getJSON("../../build/contracts/BPTTokenSale.json", function(constructor){
            // console.log(constructor);
            state.contracts.BPTTokenSale = TruffleContract(constructor);
            state.contracts.BPTTokenSale.setProvider(state.web3Provider);
            state.contracts.BPTTokenSale.deployed().then(function(constructor){
                console.log("BPTToken Sale Address: ", constructor.address);
            });
        }).done(function() {
            $.getJSON("../../build/contracts/BPTToken.json", function(constructor) {
                state.contracts.BPTToken = TruffleContract(constructor);
                state.contracts.BPTToken.setProvider(state.web3Provider);
                state.contracts.BPTToken.deployed().then(function(constructor) {
                  console.log("BPTToken Address:", constructor.address);
                });
                console.log("Contracts initialized");
                return render(web3);
            });
        });
        */
    }

    const render = (web3) => {
        if(state.loading){
            return;
        }

        web3.eth.getCoinbase(function(err, account) {
            if(err === null) {
              console.log("account: ", account);
              state.account = account;
              document.getElementById("accountAddress").innerHTML = "Your Account: " + account;
            }
          })

        var BPTTokenSaleInstance;
            // Load token sale contract
        state.contracts.BPTTokenSale.deployed().then(function(instance) {
            BPTTokenSaleInstance = instance;
            return BPTTokenSaleInstance.tokenPrice();
        }).then(function(tokenPrice) {
            state.tokenPrice = tokenPrice;

            document.getElementByClassName("token-price").innerHTML = state.tokenPrice + "ether";

            return {BPTTokenSaleInstance: BPTTokenSaleInstance.tokensSold(),
                state: state,
                setState: setState}
            //return;
        }).then(function(tokensSold) {
            state.tokensSold = tokensSold.toNumber();
            document.getElementByClassName("tokens-sold").innerHTML = state.tokensSold;

            document.getElementByClassName("tokens-available").innerHTML = state.tokensAvailable;

        });

        var progressPercent = (Math.ceil(500000000000) / 1000000000000) * 100;
        var progressBar = document.getElementByClassName("progress");
        progressBar.style.width = progressPercent + "%";
        // $('#progress').css('width', progressPercent + '%');


    }

    return initWeb3()

}

// export default function render() {
//      state.init();
// }

export default TokenConfig;





