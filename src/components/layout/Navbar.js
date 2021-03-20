import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const AppNavbar = (props) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Wallet</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/createtransaction">Create Transaction</Nav.Link>
                <Nav.Link href="/buy">Buy BPT</Nav.Link>
                <Nav.Link href="#pricing">Place Holder</Nav.Link>
            </Nav>
            {links}
            
        </Navbar>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(AppNavbar)