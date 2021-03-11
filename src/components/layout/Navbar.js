import {React, useState, useEffect} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Wallet</Navbar.Brand>
            <Nav>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/createtransaction">Create Transaction</Nav.Link>
                <Nav.Link href="#pricing">Place Holder</Nav.Link>
            </Nav>
            <SignedOutLinks/>
            <SignedInLinks/>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(AppNavbar)
