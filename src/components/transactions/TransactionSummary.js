import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TransactionDetails = ({ transaction }) => {
    return (
        <ListGroup.Item > Amount: {transaction.amount} from {transaction.from} to {transaction.to} at {transaction.time.toString()}</ListGroup.Item>
    )
}

export default TransactionDetails
