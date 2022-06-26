
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {  Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import Sidebar from '../components/sidebar/Sidebar';

import SubHeader from '../components/SubHeader';
import ProjectCategoriesList from '../features/projectCategories/ProjectCategoriesList';
import { selectProjectCategoryById } from '../features/projectCategories/projectCategoriesSlice';
import  ProjectCategoryDetails  from '../features/projectCategories/ProjectCategoryDetails';
import { selectAllProjectTasks } from '../features/projectTasks/projectTasksSlice';
import DisplayAllTasks from '../features/tasks/DisplayAllTasks';
import Tasks from '../features/tasks/Tasks';


const TasklistPage = () => {
  const [tasks, setTasks] = useState(selectAllProjectTasks());
  return (
  <div style={{
    padding: '50px 0px 0px 370px'
  }}>
    <Sidebar />
    <Container>
      <Row>
        
        <Outlet />
        <SubHeader current='Tasklist'/>
      </Row>
      <Row>
        <Button className='primary'>New Task</Button>
      </Row>
      <Row>
      <Tasks tasks={tasks}></Tasks>  
              <Card>
              
              </Card>
          </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader>Components</CardHeader>
            <CardBody>
              <ul>
                <li className='text-success'>Category Card</li>
                <li className='text-danger'>Category List</li>
                <li className='text-success'>Category Detail</li>
                <li className='text-success'>Category Slice</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardHeader>Pages</CardHeader>
            <CardBody>
              <ul>
                <li className='text-danger'>Category Details</li>
                <li className='text-danger'>Category List</li>
                
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
};

export default TasklistPage;