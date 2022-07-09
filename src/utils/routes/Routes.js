import { Routes, Route, Router } from 'react-router-dom';
import ProjectOverviewPage from '../../pages/ProjectOverviewPage';

export const routes = ()=> {
  return (
    <div className='routes'>
    <Routes>
      
      <Route path='/' element={<ProjectOverviewPage />} />
        
    </Routes>
    </div>
  )
}

