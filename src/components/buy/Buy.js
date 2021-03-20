import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import BPTTokenABI from '../../BPTTokenconfig/BPTToken.json'
import BPTTokenSaleABI from '../../BPTTokenconfig/BPTTokenSale.json'

import Web3 from 'web3'
import MetamaskNotification from './MetamaskNotification'
import WarningMessage from './WarningMessage'

const Buy = () => {
  const [tokenState, setTokenState] = useState({
    currentAccount: null,
    sold: 0,
  })

  const [formState, setFormState] = useState({
    amount: 0,
    validated: false
  })

  const formRef = useRef(null)

  const web3 = new Web3(Web3.givenProvider)
  const totalSupply= web3.utils.fromWei('10000000000000000000000', 'ether') 
  const tokenABI = JSON.parse(JSON.stringify(BPTTokenABI))['abi']
  const tokenContractAddress = "0x8BE1b1566B3EA1B4581EEef755C4feAA514E5DD5"
  const tokenInst = new web3.eth.Contract(tokenABI, tokenContractAddress)
  
  
  const saleABI = JSON.parse(JSON.stringify(BPTTokenSaleABI))['abi']
  const saleContractAddress = "0xeeF4605087fCc715474e821Fdf448351B0699382"
  const tokenSaleInst = new web3.eth.Contract(saleABI, saleContractAddress)

  const getBPTBalance = async ({account}) => {
    const balance = tokenInst.methods.balanceOf(saleContractAddress).call().then((bal) => bal)
    return balance
  } 
  
  //tokenSaleInst.methods.weiRaised().call().then((sold) => {setState({...state, sold: sold})})
  

  const metamaskInstalled = typeof window.ethereum !== 'undefined'
  
  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log('Please connect to MetaMask!');
    } else if (accounts[0] !== tokenState.currentAccount) {
      setTokenState({...tokenState, currentAccount: accounts[0]})
      // Do any other work!
    }
  }

  const connect = async () => {
    if (metamaskInstalled) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(handleAccountsChanged)
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      })
    }
  }
  

  
  const addBPTToWallet = async () => {
    const tokenAddress = '0x8BE1b1566B3EA1B4581EEef755C4feAA514E5DD5';
    const tokenSymbol = 'BPT';
    const tokenDecimals = 18;

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
              // A string url of the token logo
          },
        },
      }).then((response) => response)

      if (wasAdded) {
        console.log('Watching BPT');
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleRest = () => {
    formRef.current.reset()
    setFormState({...formState, validated:false})
  }
  const buy = (e) => {
    e.preventDefault()
    tokenSaleInst.methods.buyTokens(tokenState.currentAccount).send({from: tokenState.currentAccount, value: web3.utils.toWei(formState.amount)})
    setFormState({...formState, validated:true})
    handleRest()
    setFormState({...formState, amount:'0'})
  }
  
  const handleChange = (e) => {
    setFormState({ 
      ...formState,
      [e.target.id]: e.target.value
    })
  }
  const isNumber = (input) => {
    return !isNaN(input)
  }
  window.ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  });
  window.ethereum.on('accountsChanged', handleAccountsChanged);
  console.log(formState);
  
  //todo 
  /*
  clear the form after clicking buy

  cant add again once added
  */
  if (metamaskInstalled) {
    return (
      <>
        <MetamaskNotification metamaskInstalled={metamaskInstalled}/>
        {!tokenState.currentAccount 
          ? <WarningMessage header={'Please Connect to MetaMask'} message={'You need to connect to MetaMask first'}/>
          : null
        }
        <h1>BPT Token Sale</h1>
        <Button variant="primary" onClick={connect}>Connect to MetaMask</Button>
        <Button variant="primary" onClick={addBPTToWallet}>Add BPT to wallet</Button>
        
        <h5>Account: {tokenState.currentAccount}</h5>
        

        <Form ref={formRef} onSubmit={buy}>
          <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="amount want to buy" onChange={handleChange} isInvalid={!isNumber(formState['amount'])}/>
            <Form.Control.Feedback type="invalid">
              Please enter a number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Text>Total Supply:{totalSupply}</Form.Text>
          <Form.Text>Sold:{tokenState.sold}</Form.Text>
          <Button variant="primary" type="submit">
            Buy
          </Button>
        </Form>
      </>
    );
  } else {
    return (
      <>
        <MetamaskNotification metamaskInstalled={metamaskInstalled}/>
      </>
    )
  }
  

  
}


export default Buy;
