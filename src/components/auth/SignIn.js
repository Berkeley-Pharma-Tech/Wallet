import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/authActions'
class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    render() {
        const {authError, auth} = this.props

        if (auth.uid) return <Redirect to='/'/>
        return (
            
            <div className="container">
            <Form onSubmit={this.handleSubmit}>
                <h5> Sign In</h5>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                { authError 
                    ? 
                        <p>{authError}</p> 
                    : null}
                { auth.uid ? <Redirect to='/'/> : null}
            </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
