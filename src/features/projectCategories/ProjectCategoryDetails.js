import { Card, CardImg, CardText, CardBody, Col, CardHeader } from 'reactstrap';


const ProjectCategoryDetails = ({ projectCategory }) => {
  const { projectCategoryId, category } = projectCategory;
  return (
    <Col md='5' className='m-1'>
            <Card>
                <CardHeader>{category}</CardHeader>
                <CardBody>
                    <CardText>Description</CardText>
                </CardBody>
            </Card>
        </Col>
  )
}

export default ProjectCategoryDetails;