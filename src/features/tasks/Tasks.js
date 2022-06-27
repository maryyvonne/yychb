import { Button, Col, Container,  Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { ButtonGroup, Card, Dropdown, InputGroup, Form, Table } from "@themesberg/react-bootstrap";
import { TASKITEMS } from '../../app/shared/TASKITEMS';


function Tasks({ task, tasks, onTglStatus }) {
  
  return (
    <div>
      <Row>
          <Card border="light" className="table-wrapper table-responsive shadow-sm">
            <Card.Body>
              <Table hover className="user-table align-items-center">
                <thead>
                  <tr>
                    <th className="border-bottom">Task</th>
                    <th className="border-bottom">Project Category</th>
                    <th className="border-bottom">Status
                          </th>
                    <th className="border-bottom">Task Created at</th>
                  </tr>
                </thead>
                <tbody>
                  {TASKITEMS.map(t=>(
                    <tr key={t.id}>
                      <td>
                          <Card.Link className="d-flex align-items-center">
                            <div className="d-block">
                              <span className="fw-bold">{t.desc}</span>
                            </div>
                          </Card.Link>
                        </td>
                        <td><span className="fw-normal"><div className="small text-gray">{t.projectCategory}</div></span></td>
                        <td><span className="fw-normal"><div className="small text-gray">{t.status}
                        <button className="button icon-only clear" onClick={() => onTglStatus(task)}>
  {t.complete && "✅"}
  {!t.complete && "⬜"}
</button></div></span></td>
                        <td><span className="fw-normal">{t.date}</span></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Row>
    </div>
  )
}

export default Tasks