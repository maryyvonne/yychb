import { Outlet } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Sidebar from '../components/sidebar/Sidebar';
import SubHeader from '../components/SubHeader';


const BuildingChecklistPage = () => {
  return (
    
    <div style={{
      padding: '50px 0px 0px 370px'
    }}>
      <Sidebar />
      <Container>
        <Row>
          
          <Outlet />
          <SubHeader current='Building Checklist'/>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </div>
  )
}

export default BuildingChecklistPage;