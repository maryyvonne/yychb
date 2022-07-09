import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardTitle, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTasksByCategoryId } from '../tasks/tasksSlice';
import ProjectCategoryDetails from './ProjectCategoryDetails';


const ProjectCategoryCard = ({ category }) => {
  const { id, name } = category;
  // const tasks = useSelector(selectTasksByCategoryId(category));
  
  return (
    <Link to={`${id}`}>
      <Card>
          <CardHeader>{name}</CardHeader>
          <CardBody> 
            <h4>Tasks</h4>
           
          </CardBody>
      </Card>
    </Link>
  )
};

export default ProjectCategoryCard;