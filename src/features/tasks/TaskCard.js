import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const TaskCard = ({ task }) => {
  const { id, desc, projectCategory, providerCategory } = task;

  return (
    <Link to={`${id}`}>
      <Card>
        <CardHeader>
          {desc}
        </CardHeader>
        <CardBody>
          {projectCategory}
          <br/>
          
        </CardBody>
      </Card>
    </Link>
  )
}

export default TaskCard