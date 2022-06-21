import { Card, CardBody, CardHeader, Container, Row, } from "reactstrap";

const Footer = () => {
  return(
    <div className="site-footer">
      <Container>
        <Row>
          <Card>
            <CardHeader>
              <h1>Overall Site To-Do</h1>
            </CardHeader>
            <CardBody>
<ul>
  <li className="text-danger">figure out how to push items to lists</li>
  <li className="text-danger">set up vendor list</li>
  <li className="text-danger">set up build item list</li>
  <li className="text-danger">project timeline</li>
</ul>

            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  )
};

export default Footer;
