import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const TransactionDetails = ({ transaction }) => {
    return (
        <Link to={"/transaction/"+ transaction.id}>
            <ListGroup.Item > Amount: {transaction.amount} from {transaction.from} to {transaction.to} at {transaction.time.toString()}</ListGroup.Item>
        </Link>
        
    )
}

export default TransactionDetails
