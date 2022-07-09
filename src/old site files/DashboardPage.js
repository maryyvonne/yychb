import { Outlet } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { Dashboard } from '../components/dashboard/Dashboard';
import Sidebar from '../components/sidebar/Sidebar';
import SubHeader from '../components/SubHeader';

const DashboardPage
 = () => {
  return (
  <>
    
    <Container>
      <Row>
        
        <Outlet />
        <SubHeader current='Project Overview'/>
      </Row>
      <Row>
        <Dashboard />
      </Row>
    </Container>
  </>
  )
};

export default DashboardPage
;