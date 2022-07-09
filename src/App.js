import { Routes, Route } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import './App.css';
import Footer from './components/Footer';

import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import TaskItem from './components/TaskItem';
import Topbar from './components/topbar/Topbar';
import BuildingChecklistPage from './old site files/BuildingChecklistPage';
import DashboardPage from './old site files/DashboardPage';
import HomePage from './old site files/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProjectCategoriesDetailsPage from './pages/ProjectCategoriesDetailsPage';
import ProjectCategoriesPage from './pages/ProjectCategoriesPage';
import ProjectOverviewPage from './pages/ProjectOverviewPage';
import TasklistPage from './pages/TasklistPage';
import VendorDirectoryPage from './pages/VendorDirectoryPage';
import { routes } from './utils/routes/Routes';



function App() {
  return (
  <>
   <div className='App'>
   <Row>
   <Topbar />
   </Row>
   
    <Row style={{padding: '0px'}}>
      <Col className='col-md-3 col-lg-2' style={{padding: '0px'}}>
      
        <Sidebar />
      
      </Col>
      <Col>
      <div className='pageWrapper' style={{
    padding: '50px 0px 0px '
  }}>
      
        
        
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='overview' element={<ProjectOverviewPage />} />
        <Route path='projectCategories' element={<ProjectCategoriesPage />}/>
        <Route path='projectCategories/:categoryId' element={<ProjectCategoriesDetailsPage />}/>
        <Route path='tasks' element={<TasklistPage />} />
        <Route path='vendorDirectory' element={<VendorDirectoryPage />} />
      </Routes>
      
    </div>
      </Col>
    </Row>
    

      </div> 
  </>   
  );
}

export default App;
