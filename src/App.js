import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';

import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import TaskItem from './components/TaskItem';
import BuildingChecklistPage from './pages/BuildingChecklistPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProjectCategoriesPage from './pages/ProjectCategoriesPage';
import TasklistPage from './pages/TasklistPage';
import VendorDirectoryPage from './pages/VendorDirectoryPage';



function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='dashboard' element={<DashboardPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='vendorDirectory' element={<VendorDirectoryPage /> } />
        <Route path='buildingChecklist' element={<BuildingChecklistPage />} />
        <Route path='projectCategories' element={<ProjectCategoriesPage />}/>
        <Route path='tasks' element={<TasklistPage />} />
      <Route path='taskItem' element={<TaskItem />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
