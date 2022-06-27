import { Button, Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardTitle, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, onTglStatus }) => {
  const { id, desc, projectCategory, providerCategory } = task;
  

  return (
    <Card to={`${id}`}>
      <CardHeader key={task.id}>
          <h4>{desc}</h4>
      </CardHeader>
      <CardBody>
        <div className="task-meta">
          <Row>
            <Col className="col-12">
                <h5 className='text-muted'>{task.projectCategory}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="col-10">
                <img
                  src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                  alt="calendar"/>
                  {task.date}
              </div>
            </Col>
          
            <Col>
              <div className="col-2 is-center">
                <Button className="button icon-only clear">
                  <img
                    src="https://icongr.am/feather/check-circle.svg?size=24&color=11d054"
                    alt="Open"
                    
                  />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  )
}

export default TaskCard