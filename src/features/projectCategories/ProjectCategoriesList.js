import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ProjectCategoryCard from "./ProjectCategoryCard";
import {
  selectAllProjectCategories,
  selectProjectCategoryById,
} from "./projectCategoriesSlice";

const ProjectCategoriesList = ({ setCategoryId }) => {
  const categories = useSelector(selectAllProjectCategories);

  console.log("categories:", categories);
  return (
    <Row className="ms-auto">
      {categories.map((category) => {
        return (
          <Col
            md="5"
            className="m-4"
            key={category.id}
            onClick={() => setCategoryId(category.id)}
          >
            <ProjectCategoryCard category={category} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProjectCategoriesList;
