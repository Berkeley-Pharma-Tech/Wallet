import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


import Web3 from 'web3'
import MetamaskNotification from './MetamaskNotification'
const Buy = (props) => {
  const [state, setState] = useState({
    amount: 0,
    accounts: ''
  })

  const metamaskInstalled = typeof window.ethereum !== 'undefined'
  
  
  
  if (metamaskInstalled) {
    window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((accounts) => console.log(accounts))
  }
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
      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }
  } catch (error) {
    console.log(error);
  }
  
  const buy = (e) => {
    e.preventDefault()
    console.log(state['amount']);
  }
  const handleChange = (e) => {
    setState({ 
      ...state,
      [e.target.id]: e.target.value
    })
  }
  const isNumber = (input) => {
    return !isNaN(input)
  }

  //todo 
  /*
  clear the form after clicking buy
  */
  if (metamaskInstalled) {
    return (
      <>
        <MetamaskNotification metamaskInstalled={metamaskInstalled}/>
        <h1>BPT Token Sale</h1>
        <Form onSubmit={buy}>
          <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="amount want to buy" onChange={handleChange} isInvalid={!isNumber(state['amount'])}/>
            <Form.Control.Feedback type="invalid">
              Please enter a number.
            </Form.Control.Feedback>
          </Form.Group>
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
