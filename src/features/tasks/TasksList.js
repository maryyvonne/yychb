import { Link } from 'react-router-dom';
import { Col, Row, } from 'reactstrap';
import TaskCard from './TaskCard';
import Tasks from './Tasks';
import { selectAllTasks } from './tasksSlice';



const TasksList = () => {
  const tasks = selectAllTasks();
  return (
    <Row className='ms-auto'>
      {tasks.map((task) => {
        return (
          <Link to={task} className='ms-auto' key={task.desc}>
            <>{task.desc}</>
          </Link>
        );
      })}
    </Row>
  )
}

export default TasksList