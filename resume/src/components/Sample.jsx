import React from 'react';
import '../CSS/Sample.css'; 
import resumeImage1 from '../assets/images/resume1.jpg';
import resumeImage2 from '../assets/images/resume2.jpg';
import resumeImage3 from '../assets/images/resume3.jpg';
import logof from '../assets/images/logo-facebook.png'
import logog from '../assets/images/logo-goldmansachs.png'
import logoj from '../assets/images/logo-jpmorgan.png'
import logot from '../assets/images/logo-tesla.png'
import logod from '../assets/images/logo-deloitte.png'
import logoa from '../assets/images/logo-apple.png'
import mw from '../assets/images/mw.jpg'

const Sample = () => {
  return (
    <div className="sample-page">
      <h1 className="sample-title">Free Resume Examples and Sample Resumes for All Jobs in 2024</h1>
      
      <div className="author-info">
        <img src={mw} alt="Author" className="author-image" />
        <span className="author-name">By Vishnu Murthy.. An aspiring Full Stack developer</span>
        <span className="updated-date">Last Updated: October 21, 2024</span>
      </div>
      
      <p className="sample-description">
        Browse top resume examples by job, industry, format, and experience level. Every sample is created and approved by our team of Certified Professional Resume Writers.
      </p>
      
      <div className="buttons-container">
        <button className="start-button">Start Your Resume Now</button>
        <button className="import-button">Import Resume</button>
      </div>
      
      <div className="resume-images">
        <img src={resumeImage1} alt="Resume Sample 1" className="resume-image" />
        <img src={resumeImage2} alt="Resume Sample 2" className="resume-image" />
        <img src={resumeImage3} alt="Resume Sample 3" className="resume-image" />
      </div>
      
      <div className="trust-info">
        <span className="trust-rating">Excellent</span>
        <span className="trust-stars">★★★★★</span>
        <span className="trust-logo">Trustpilot</span>
      </div>
      
      <p className="subscriber-info">Subscribers have been hired by:</p>
      
      <div className="logo-list">
        <ul className="company-logos">
          <li><img src={logod} alt="Deloitte" /></li>
          <li><img src={logoj} alt="J.P. Morgan" /></li>
          <li><img src={logof} alt="Facebook" /></li>
          <li><img src={logog} alt="Goldman Sachs" /></li>
          <li><img src={logoa} alt="Apple" /></li>
          <li><img src={logot} alt="Tesla" /></li>
          {/* Repeat the logos for a seamless scroll */}
          <li><img src={logod} alt="Deloitte" /></li>
          <li><img src={logoj} alt="J.P. Morgan" /></li>
          <li><img src={logof} alt="Facebook" /></li>
          <li><img src={logog} alt="Goldman Sachs" /></li>
          <li><img src={logoa} alt="Apple" /></li>
          <li><img src={logot} alt="Tesla" /></li>
        </ul>
      </div>

    </div>
  );
};

export default Sample;
