import { Col, Row, } from 'reactstrap';
import TaskCard from './TaskCard';
import { selectAllTasks } from './tasksSlice';



const TasksList = () => {
  const tasks = selectAllTasks();
  return (
    <Row className='ms-auto'>
      {tasks.map((task) => {
        return (
          <Col md='5' className='ms-auto' key={task.desc}>
            <TaskCard task={task}/>
          </Col>
        );
      })}
    </Row>
  )
}

export default TasksList