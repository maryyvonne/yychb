import React from 'react'
import { useParams } from 'react-router-dom'
import { selectProjectCategoryById } from '../features/projectCategories/projectCategoriesSlice';
import ProjectCategoryDetails from '../features/projectCategories/ProjectCategoryDetails';

const ProjectCategoriesDetailsPage = () => {
  const { projectCategoryId } = useParams();
  const projectCategoryName = selectProjectCategoryById(projectCategoryId);
  return (
    <Container>
      <SubHeader current={projectCategoryName.projectCategory} detail={true} />
      <Row>
        <ProjectCategoryDetails projectCategory={projectCategory} />
        
      </Row>
    </Container>
  )
}

export default ProjectCategoriesDetailsPage;