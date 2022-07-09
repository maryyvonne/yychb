import { useSelector } from 'react-redux';
import { Card, CardImg, CardText, CardBody, Col, CardHeader } from 'reactstrap';
import { selectProjectCategoryById } from './projectCategoriesSlice';
import ProjectCategoryTab from './ProjectCategoryTab';



const ProjectCategoryDetails = ({ category }) => {
  const { id, name, categoryTasks } = category;
  const tasks = useSelector(selectProjectCategoryById(category))
  return (
    <Col md='5' className='m-1'>
            <Card>
                <CardHeader>Tasks</CardHeader>
                <CardBody>
                    <CardText>
                      
                    </CardText>
                </CardBody>
            </Card>
        </Col>
  )
}

export default ProjectCategoryDetails;