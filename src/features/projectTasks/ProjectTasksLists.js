import { Col, Row, } from 'reactstrap';
import { selectTaskByCategory } from './projectTasksSlice';

const ProjectTasksLists = () => {
  const categoryTasks = selectTaskByCategory();
  return (
    <Row className='ms-auto'>
      {categoryTasks.map((categoryTask) => {
        return (
          <Col ms='5' className='m-4' key={projectCategory.projectCategory}>
            
          </Col>
        )
      })}
    </Row>
  )
}

export default ProjectTasksLists;