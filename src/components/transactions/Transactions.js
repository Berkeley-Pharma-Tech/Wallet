import React from 'react'
import { ListGroup } from 'react-bootstrap'
import TransactionDetails from './TransactionDetails'
const Transactions = ({transactions}) => {
    return (
        <ListGroup>
            {transactions && transactions.map((transaction) => <TransactionDetails transaction={transaction} key={transaction.id}/>)}
        </ListGroup>
        
    )
}

export default Transactions