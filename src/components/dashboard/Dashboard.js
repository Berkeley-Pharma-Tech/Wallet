import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Notifications from './Notifications'
import Transactions from '../transactions/Transactions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Welcome } from '../layout/Welcome'

class Dashboard extends Component {
    
    render() {
        const { transactions, auth } = this.props
        if (!auth.uid) return <Welcome/>
        console.log(auth);
        return (
            <Container>
                <Row>
                    <Col>
                        <Transactions transactions={transactions}/>
                    </Col>
                    <Col>
                        <Notifications/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        transactions: state.firestore.ordered.transactions,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'transactions' }
    ])
)(Dashboard)