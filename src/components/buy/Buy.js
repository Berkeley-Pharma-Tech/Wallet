import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FrontEnd from "../../BPTTokenconfig/src/FrontEnd.js";

const Buy = (props) => {
  const [amount, setAmount] = useState(0)

  const buy = (e) => {
    e.preventDefault()
    console.log(amount);
  }
  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  const isNumber = (input) => {
    return !isNaN(input)
  }

  //todo 
  /*
  clear the form after clicking buy
  */

  return (
    <>
      <h1>BPT Token Sale</h1>
      <Form onSubmit={buy}>
        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="amount want to buy" onChange={handleChange} isInvalid={!isNumber(amount)}/>
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
}


export default Buy;
