import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createTransaction } from '../../store/actions/transactionActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateTransaction extends Component {
    state = {
        amount: 0,
        from: '',
        to: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        this.props.createTransaction(this.state)
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="float" placeholder="amount" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="from">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" placeholder="from" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="to">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="text" placeholder="to" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign
                </Button>
            </Form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: (transaction) => dispatch(createTransaction(transaction))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTransaction)