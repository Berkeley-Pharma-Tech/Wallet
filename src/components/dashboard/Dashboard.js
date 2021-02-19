import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Notifications from './Notifications'


class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Notifications/>
                    </Col>
                </Row>
            </Container>
        )
    }
}