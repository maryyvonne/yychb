import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardTitle, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const TaskCard = ({ task }) => {
  const { id, desc, projectCategory, providerCategory } = task;

  return (
    <Card to={`${id}`}>
      <CardHeader key={task.id}>
          <h4>{desc}</h4>
      </CardHeader>
      <CardBody>
        <Row></Row>
        <Row>
          <div className="card text-left" >
            <div className="row">
              <div className="col-10">
                <h4>{task.desc}</h4>
                <div className="task-meta">
                  <img
                    src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                    alt="calendar"
                  />
                  {task.date}
                </div>
              </div>

              <div className="col-2 is-center">
                <button className="button icon-only clear">
                  <img
                    src="https://icongr.am/feather/check-circle.svg?size=24&color=11d054"
                    alt="Open"
                  />
                </button>
              </div>
              <div className="col-12">
                <p>{task.projectCategory}</p>
              </div>
            </div>
          </div>
        </Row>
      </CardBody>
    </Card>
  )
}

export default TaskCard