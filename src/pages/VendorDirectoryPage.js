import { Outlet } from 'react-router-dom';
import { Card, CardBody, CardHeader, Container, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import Sidebar from '../components/sidebar/Sidebar';



const VendorDirectoryPage = () => {
  return (
    <>
    <Row>
      <Outlet />
      <SubHeader current="Vendor Directory" />
    </Row>
     
    </>
  )
}

export default VendorDirectoryPage;