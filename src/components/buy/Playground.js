import React from 'react'
import Web3 from 'web3'
import BPTTokenABI from '../../BPTTokenconfig/BPTToken.json'
import BPTTokenSaleABI from '../../BPTTokenconfig/BPTTokenSale.json'

const playground = () => {
    const web3 = new Web3(Web3.givenProvider)
    
    const tokenABI = JSON.parse(JSON.stringify(BPTTokenABI))['abi']
    const tokenContractAddress = "0x8BE1b1566B3EA1B4581EEef755C4feAA514E5DD5"
    const tokenInst = new web3.eth.Contract(tokenABI, tokenContractAddress)
    tokenInst.methods.balanceOf('0xBacdFD8567e331D22cB26189B3C658B0B03A2a0C').call().then((bal) => {
      console.log(bal);
   })
    const saleABI = JSON.parse(JSON.stringify(BPTTokenSaleABI))['abi']
    const saleContractAddress = "0xeeF4605087fCc715474e821Fdf448351B0699382"
    const tokenSaleInst = new web3.eth.Contract(saleABI, saleContractAddress)
    tokenInst.methods.balanceOf(saleContractAddress).call().then((bal) => {
      console.log(bal);
   })
    tokenSaleInst.methods.weiRaised().call().then((response) => console.log(response))


    //web3.eth.getBalance('0x09224bC4a1Ea9ce55E953bFab083A055eC4d19B7').then((response)=> console.log(response))
    //console.log(web3.eth.accounts);
    const getAccount = async () => {
      window.ethereum
      .request({ method: 'eth_accounts' })
      .then((response) => console.log(response))
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log('Please connect to MetaMask.');
        } else {
          console.error(error);
        }
      });
    }
    
    
    return (
        <div>
            <h1>Playground</h1>
        </div>
    )
}

export default playground
