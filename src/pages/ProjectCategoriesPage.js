import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {  Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import Sidebar from '../components/sidebar/Sidebar';

import SubHeader from '../components/SubHeader';
import ProjectCategoriesList from '../features/projectCategories/ProjectCategoriesList';
import { selectProjectCategoryById } from '../features/projectCategories/projectCategoriesSlice';
import  ProjectCategoryDetails  from '../features/projectCategories/ProjectCategoryDetails';


const ProjectCategoriesPage = () => {
  const [ projectCategoryId, setProjectCategoryId ] = useState();
  const selectedProjectCategory = selectProjectCategoryById(projectCategoryId);
  return (
  <div style={{
    padding: '50px 0px 0px 370px'
  }}>
    <Sidebar />
    <Container>
      <Row>
        
        <Outlet />
        <SubHeader current='Project Categories'/>
      </Row>
      <Row>
           <ProjectCategoriesList />   
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

export default ProjectCategoriesPage;