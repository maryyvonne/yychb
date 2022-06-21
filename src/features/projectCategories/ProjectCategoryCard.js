import { Card, CardHeader, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCategoryCard = ({ projectCategory }) => {
  const { projectCategoryId, category } = projectCategory;
  return (
    <Link to={`${projectCategoryId}`}>
      <Card>
          <CardHeader>
            {category}
          </CardHeader>
      </Card>
    </Link>
  )
};

export default ProjectCategoryCard;