import React from "react";
import "../CSS/ATSInfo.css"; 
import { Link } from "react-router-dom";

const ATSInfo = () => {
  return (
  
    <div className="ats-container">
      <h1 className="ats-title">Why Your Resume Should Be ATS-Friendly</h1>
      <p className="ats-subtitle">Stand out by ensuring your resume reaches real decision-makers.</p>
      
      <section className="ats-section">
        <div className="ats-content">
          <h2>What is an Applicant Tracking System (ATS)?</h2>
          <p>
            An ATS is software that automates the hiring process by scanning resumes for keywords 
            and qualifications. Around 99% of Fortune 500 companies use ATS to streamline recruitment, 
            making it essential for job seekers to optimize their resumes accordingly.
          </p>
        </div>
      </section>
      
      <section className="ats-section">
        <div className="ats-content">
          <h2>How ATS Impacts Your Job Search</h2>
          <p>
            ATS allows companies to filter resumes based on skills, experience, and education 
            using keyword matching. Optimizing your resume for ATS can increase your chances of 
            landing that crucial interview.
          </p>
        </div>
      </section>
      
      <section className="ats-section">
        <div className="ats-content">
          <h2>Best Practices for ATS-Friendly Resumes</h2>
          <p>
            Avoid complex formatting, use clear headings, and include relevant keywords that match 
            the job description. Research company roles to identify the best keywords to improve 
            your resume's visibility.
          </p>
        </div>
      </section>
      
      <section className="ats-tips">
        <h2>Quick Tips for ATS Optimization</h2>
        <ul>
          <li>Use standard section headings (e.g., "Work Experience").</li>
          <li>Avoid graphics, images, or unusual fonts.</li>
          <li>Include keywords that match job requirements.</li>
          <li>Tailor your resume to each job application.</li>
        </ul>
      </section>
      
      <button className="cta-button" onClick={() => alert("Start building your ATS-friendly resume now!")}>
        Start Building Your Resume
      </button>
    </div>
  );
};

export default ATSInfo;
