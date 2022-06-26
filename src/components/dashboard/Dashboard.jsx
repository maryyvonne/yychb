import { Container,  } from '@material-ui/core';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import React from 'react'
import TasksList from '../../features/tasks/TasksList';




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
              <TasksList />
            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
