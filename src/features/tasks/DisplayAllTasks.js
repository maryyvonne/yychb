import { Col, Row, } from 'reactstrap';
import { selectAllProjectTasks } from '../projectTasks/projectTasksSlice';
import TaskCard from './TaskCard';


const DisplayAllTasks =() => {
  const tasklist = selectAllProjectTasks();
  return (
    <Row className='ms-auto'>
            {tasklist.map((task) => {
                return (
                    <Col md='5' className='m-4' key={task.desc}>
                        <TaskCard  task={task}/>
                    </Col>
                );
            })}
        </Row>
  )
};

export default DisplayAllTasks;
