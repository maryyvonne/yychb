import React from 'react'
import { useParams } from 'react-router-dom'
import { selectProjectCategoryById } from '../features/projectCategories/projectCategoriesSlice';
import ProjectCategoryDetails from '../features/projectCategories/ProjectCategoryDetails';

const ProjectCategoriesDetailsPage = () => {
  const { projectCategoryId } = useParams();
  const projectCategoryName = selectProjectCategoryById(projectCategoryId);
  return (
    <Container>
      <SubHeader />
      <Row>
        <ProjectCategoryDetails />
        
      </Row>
    </Container>
  )
}

export default ProjectCategoriesDetailsPage;