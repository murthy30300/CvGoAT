import React from "react";
import "../CSS/ResumeHom.css";
import { Link } from "react-router-dom";
import dropdown from '../assets/svgs/dropdown.svg'
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="heading">
          <Link to ="/"><h1>Murthy's CVGoAT</h1></Link>
        </div>
        <div className="right">
          <div className="dropdown">
            <button className="dropdown-toggle">
              Resumes
             <img src={dropdown}/>
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/gemini">Resume Builder</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/sample">Resume Samples</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/atsinfo">Why ATS Resume</Link>
              </li>
            </ul>
          </div>
          <div className="signin">Sign In</div>
          <div className="getStarted">Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
