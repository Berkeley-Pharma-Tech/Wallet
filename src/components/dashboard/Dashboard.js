import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Notifications from './Notifications'
import Transactions from '../transactions/Transactions'

const Dashboard = () => {
    return (
            <Container>
                <Row>
                    <Col>
                        <Transactions/>
                    </Col>
                    <Col>
                        <Notifications/>
                    </Col>
                </Row>
            </Container>
        )
}

export default Dashboard