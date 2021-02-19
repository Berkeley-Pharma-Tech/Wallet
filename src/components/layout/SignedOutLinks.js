import React from 'react'
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
        <Nav>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
            <Nav.Link href="#signin">Sign In</Nav.Link>
        </Nav>
    )
}

export default SignedOutLinks