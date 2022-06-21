import { Container,  } from '@material-ui/core';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import React from 'react'



export const Dashboard = () => {
  return (
    <div>Dashboard
      <Container>
        <Row>
          <Col>
          <Card>
            <CardHeader>Project Completion Graph</CardHeader>
            <CardBody></CardBody>
          </Card>
          </Col>
          <Col>
          <Card>
            <CardHeader>Finance Graph</CardHeader>
            <CardBody></CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
            <CardHeader>Project Timeline</CardHeader>
            <CardBody>
              
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card>
            <CardHeader>Task List</CardHeader>
            <CardBody>To do list:<br/>
            1. Create way to push items to do list<br/>
            2. Render to do list<br/>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
