import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import FrontEnd from "../../BPTTokenconfig/src/FrontEnd.js";
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
    .then((accounts) => console.log(accounts[0]))
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
