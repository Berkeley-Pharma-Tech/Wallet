import React from 'react'
import { Tab, Row, Col, ListGroup, Sonnet } from 'react-bootstrap'


const Transactions = () => {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                <ListGroup>
                    <ListGroup.Item action href="#link1">
                    Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                    Link 2
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        <p>1</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        <p>2</p>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        
    )
}

export default Transactions