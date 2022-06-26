import { Outlet } from 'react-router-dom';
import { Card, CardBody, CardHeader, Container, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import Sidebar from '../components/sidebar/Sidebar';



const VendorDirectoryPage = () => {
  return (
    <div style={{
      padding: '50px 0px 0px 370px'
    }}>
      <Sidebar />
      <Container>
        <Row>
          
          <Outlet />
          <SubHeader current='Vendor Directory'/>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </div>
  )
}

export default VendorDirectoryPage;