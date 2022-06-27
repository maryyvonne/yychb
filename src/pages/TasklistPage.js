import { Button, Col, Container,  Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faCog, faCheck, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import SubHeader from '../components/SubHeader'
import TasksList from '../features/tasks/TasksList'
import { useState } from 'react';
import AddNewTaskForm from '../features/tasks/AddNewTaskForm';
import { ButtonGroup, Card, Dropdown, InputGroup, Form, Table } from "@themesberg/react-bootstrap";
import { TASKITEMS } from '../app/shared/TASKITEMS';


const TasklistPage = () => {
  
  return (
    <div 
      className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
        style={{
        padding: '50px 0px 0px 370px'
      }}>
      <Sidebar />
      <Container>

        <Row>
          <Outlet />
          <SubHeader current='Task List' />
        </Row>

        <Row>
          <div className="btn-toolbar mb-2 mb-md-0">
            <Col><AddNewTaskForm /></Col>
            <Col xs={9} lg={4} className="d-flex">
              <InputGroup className="me-2 me-lg-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
              </InputGroup>
              <Form.Select className="w-25">
                <option defaultChecked>All</option>
                <option value="1">Completed</option>
                <option value="2">Incomplete</option>
                <option value="3">Pending</option>
                <option value="3">Canceled</option>
              </Form.Select>
            </Col>
            <Col>
              <ButtonGroup className="ms-3">
                <Button 
                  outline
                  variant="outline-primary" size="sm">Share</Button>
                <Button 
                  outline
                  variant="outline-primary" size="sm">Export</Button>
              </ButtonGroup>
            </Col>
            
            <Col xs={3} lg={8} className="text-end">
            <Dropdown as={ButtonGroup} className="me-2">
                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                    <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faSlidersH} />
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                    <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faCog} />
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>             
          </div>
          
        </Row>

        

        <Row>
          <Card border="light" className="table-wrapper table-responsive shadow-sm">
            <Card.Body>
              <Table hover className="user-table align-items-center">
                <thead>
                  <tr>
                    <th className="border-bottom">Task</th>
                    <th className="border-bottom">Project Category</th>
                    <th className="border-bottom">Status
                          </th>
                    <th className="border-bottom">Task Created at</th>
                  </tr>
                </thead>
                <tbody>
                  {TASKITEMS.map(t=>(
                    <tr key={t.id}>
                        <td>
                          <Card.Link className="d-flex align-items-center">
                            <div className="d-block">
                              <span className="fw-bold">{t.desc}</span>
                            </div>
                          </Card.Link>
                        </td>
                        <td><span className="fw-normal"><div className="small text-gray">{t.projectCategory}</div></span></td>
                        <td><span className="fw-normal"><div className="small text-gray">{t.status}</div></span></td>
                        <td><span className="fw-normal">{t.date}</span></td>
                    </tr>
                  ))} 
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          
        </Row>
        
      </Container>

    </div>
  )
}

export default TasklistPage