import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeHome from './components/ResumeHome';
import Gemini from './components/Gemini';
import './App.css';
import Sample from './components/Sample'
import Navbar from './components/Navbar';
import ATSInfo from './components/ATSInfo';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<ResumeHome />} /> {/* Default route */}
        <Route path="/gemini" element={<Gemini />} />
        <Route path="/sample" element={<Sample />}/>
        <Route path="/atsinfo" element={<ATSInfo/>}/>
        <Route path= "/sidebar" element={<Sidebar/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
