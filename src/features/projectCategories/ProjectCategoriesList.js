import { Col, Row, } from 'reactstrap';
import ProjectCategoryCard from "./ProjectCategoryCard";
import { selectAllProjectCategories } from "./projectCategoriesSlice";

const ProjectCategoriesList =() => {
  const projectCategories = selectAllProjectCategories();
  return (
    <Row className='ms-auto'>
            {projectCategories.map((projectCategory) => {
                return (
                    <Col md='5' className='m-4' key={projectCategory.projectCategoryId}>
                        <ProjectCategoryCard projectCategory={projectCategory} />
                    </Col>
                );
            })}
        </Row>
  )
};

export default ProjectCategoriesList;