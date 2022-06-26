import { Container,  } from '@material-ui/core';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import React from 'react'
import Tasks from '../../features/tasks/Tasks';



export const Dashboard = () => {
  return (
    <div>Dashboard
      <Container>
        <Row>
          <Col sm-6>
          <Card>
            <CardHeader>Project Completion Graph</CardHeader>
            <CardBody></CardBody>
          </Card>
          </Col>
          <Col sm-6>
          <Card>
            <CardHeader>Finance Graph</CardHeader>
            <CardBody></CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col sm-6>
          <Card>
            <CardHeader>Project Timeline</CardHeader>
            <CardBody>
              
            </CardBody>
          </Card>
          </Col>
          <Col sm-6>
          <Card>
            <CardHeader>Task List</CardHeader>
            <CardBody>
              
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
