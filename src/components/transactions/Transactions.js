import React from 'react'
import { ListGroup } from 'react-bootstrap'
import TransactionSummary from './TransactionSummary'
const Transactions = ({transactions}) => {
    return (
        <ListGroup>
            {transactions && transactions.map((transaction) => <TransactionSummary transaction={transaction} key={transaction.id}  />)}
        </ListGroup>
        
    )
}

export default Transactions