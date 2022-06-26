import { Outlet } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { Dashboard } from '../components/dashboard/Dashboard';
import Sidebar from '../components/sidebar/Sidebar';
import SubHeader from '../components/SubHeader';

const DashboardPage
 = () => {
  return (
  <div style={{
    padding: '50px 0px 0px 370px'
  }}>
    <Sidebar />
    <Container>
      <Row>
        
        <Outlet />
        <SubHeader current='Dashboard'/>
      </Row>
      <Row>
        <Dashboard />
      </Row>
    </Container>
  </div>
  )
};

export default DashboardPage
;