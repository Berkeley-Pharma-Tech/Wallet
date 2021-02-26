import React from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <Nav>
            <Nav.Link onSelect={props.signOut} href="/">Log Out</Nav.Link>
            <Nav.Link href="/">Shelden Shi</Nav.Link>
        </Nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)