import { Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';

import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import BuildingChecklistPage from './pages/BuildingChecklistPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProjectCategoriesPage from './pages/ProjectCategoriesPage';
import VendorDirectoryPage from './pages/VendorDirectoryPage';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='vendorDirectory' element={<VendorDirectoryPage /> } />
        <Route path='buildingChecklist' element={<BuildingChecklistPage />} />
        <Route path='projectCategories' element={<ProjectCategoriesPage />}/>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
