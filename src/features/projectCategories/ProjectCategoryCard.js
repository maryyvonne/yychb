import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


const ProjectCategoryCard = ({ projectCategory }) => {
  const { projectCategoryId, category, categoryTasks } = projectCategory;
  
  return (
    <Link to={`${projectCategoryId}`}>
      <Card>
          <CardHeader>
            {category}
          </CardHeader>
          <CardBody category={categoryTasks}> 
            This should show project task items
          </CardBody>
      </Card>
    </Link>
  )
};

export default ProjectCategoryCard;