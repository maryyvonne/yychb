import { Card, CardImg, CardText, CardBody, Col, CardHeader } from 'reactstrap';
import { selectAllProjectTasks } from '../projectTasks/projectTasksSlice';


const ProjectCategoryDetails = ({ projectCategory }) => {
  const { projectCategoryId, category } = projectCategory;
  const projectTasks = selectAllProjectTasks(projectCategory)
  return (
    <Col md='5' className='m-1'>
            <Card>
                <CardHeader>{category}</CardHeader>
                <CardBody>
                    <CardText>blah blah blah</CardText>
                </CardBody>
            </Card>
        </Col>
  )
}

export default ProjectCategoryDetails;