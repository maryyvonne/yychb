import { Button, Col, Container, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCheck, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import SubHeader from '../components/SubHeader'


import AddNewTaskForm from '../features/tasks/AddNewTaskForm';
import { ButtonGroup, Card, Dropdown, InputGroup, Form, Table } from "@themesberg/react-bootstrap";
import { TASKITEMS } from '../app/shared/TASKITEMS';
import Tasks from '../features/tasks/Tasks';
import { selectAllTasks } from '../features/tasks/tasksSlice';


const TasklistPage = () => {
  const [tasks, setTasks] = useState(selectAllTasks()); 

  const onTglStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };
  
  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date, projectCategory }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), projectCategory : projectCategory, complete: false },
      ...tasks,
    ]);
  };

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
          <Tasks />
        </Row>
        <Row>
          
        </Row>
        
      </Container>

    </div>
  )
}

export default TasklistPage