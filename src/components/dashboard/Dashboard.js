import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Notifications from './Notifications'
import Transactions from '../transactions/Transactions'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { transactions } = this.props

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
    return {
        transactions: state.transaction.transactions
    }
}

export default connect(mapStateToProps)(Dashboard)