import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ResumeHome from './components/ResumeHome';
import Gemini from './components/Gemini'; // Ensure this import is present
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeHome />} /> {/* Default route */}
        <Route path="/gemini" element={<Gemini />} />
      </Routes>
    </Router>
  );
}

export default App;
