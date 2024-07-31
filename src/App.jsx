import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ResumeDocument from './components/ResumeDocument';

function App() {
  return (<>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/templates' element={<ResumeDocument/>}/>
    </Routes>
    
    </>
  );
}

export default App;
