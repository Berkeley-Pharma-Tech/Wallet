import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Wallet</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Place Holder</Nav.Link>
                <Nav.Link href="#features">Place Holder</Nav.Link>
                <Nav.Link href="#pricing">Place Holder</Nav.Link>
            </Nav>
            <SignedOutLinks/>
            <SignedInLinks/>
            
        </Navbar>

    )
}

export default AppNavbar