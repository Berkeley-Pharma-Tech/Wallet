import React from 'react'
import { Nav } from 'react-bootstrap'

const SignedInLinks = () => {
    return (
        <Nav>
            <Nav.Link href="#logout">Log Out</Nav.Link>
            <Nav.Link href="#account">Shelden Shi</Nav.Link>
        </Nav>
    )
}

export default SignedInLinks