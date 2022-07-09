import React from "react";
import { Outlet } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Dashboard";
import SubHeader from "../components/SubHeader";
import { Row } from "reactstrap";

const ProjectOverviewPage = () => {
  return (
    <>
      <Row>
        <Outlet />
        <SubHeader current="Project Dashboard" />
      </Row>
      <Row>
        The Home Page
      </Row>
    </>
  );
};

export default ProjectOverviewPage;
