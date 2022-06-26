import { Card, CardBody, CardHeader, Col, Row  } from 'reactstrap'
;function Task({ task, onTglStatus }) {
  return (
    <div className='text-align-left' key={task.id}>
      <Card>
        <h5 className='card-title'>{task.desc}</h5>
        <CardBody>
          <Col><h6 className='card-subtitle mb-2 text-muted'>{task.projectCategory}</h6></Col>
          <Col><h6 className='card-subtitle mb-2 text-muted'>{task.providerCategory}</h6></Col>
            
            <div className="task-meta">
              <img
                src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                alt="calendar"
              />
              {task.date}

            </div>
          

          <div className="col-2 is-center">
          {task.complete}
          <button
            className="button icon-only clear"
            onClick={() => onTglStatus(task)}>
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
        </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Task;