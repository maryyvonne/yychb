import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom'
import { Container, Row } from 'reactstrap';
import Sidebar from '../components/sidebar/Sidebar';
import SubHeader from '../components/SubHeader';
import { selectProjectCategoryById } from '../features/projectCategories/projectCategoriesSlice';
import ProjectCategoryDetails from '../features/projectCategories/ProjectCategoryDetails';

const ProjectCategoriesDetailsPage = () => {
  const { categoryId } = useParams();
  const category = useSelector(selectProjectCategoryById(categoryId));
  return (
    <>
      
      
        <Row>
          
          <Outlet />
          <SubHeader current={category.name} detail={true}/>
        </Row>
        <Row>
          <ProjectCategoryDetails category={category}/>
    
        </Row>
        
      
      </>
    
  )
}

export default ProjectCategoriesDetailsPage;