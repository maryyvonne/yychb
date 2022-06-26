import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { selectTaskByCategory } from '../projectTasks/projectTasksSlice';

const ProjectCategoryCard = ({ projectCategory }) => {
  const { projectCategoryId, category } = projectCategory;
  const categoryTasks = selectTaskByCategory(projectCategoryId);
  return (
    <Link to={`${projectCategoryId}`}>
      <Card>
          <CardHeader>
            {category}
          </CardHeader>
          <CardBody category={category}> 
            {categoryTasks}
          </CardBody>
      </Card>
    </Link>
  )
};

export default ProjectCategoryCard;