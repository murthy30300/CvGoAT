import React, { useState } from 'react';
import '../CSS/ResumeHom.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import banner from '../assets/images/banner.jpg';
import { Link } from 'react-router-dom';


const ResumeHome = () => {
    const [hoveredTabIndex, setHoveredTabIndex] = useState(null);
    const [hoveredTabWidth, setHoveredTabWidth] = useState(0);

    const tabs = [
        { id: 1, name: "AI writer", image: image1, targetDiv: "div1" },
        { id: 2, name: "Resume builder", image: image2, targetDiv: "div2" },
        { id: 3, name: "Samples", image: image3, targetDiv: "div3" },
        { id: 4, name: "Cover letter builder", image: image4, targetDiv: "div4" },
        { id: 5, name: "Resume review", image: banner, targetDiv: "div5" },
    ];


    const [selectedTab, setSelectedTab] = useState(tabs[0]);


    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        const targetDiv = document.getElementById(tab.targetDiv);
        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: "smooth" });
        }
    };


    const previousTab = () => {
        const currentIndex = tabs.findIndex(tab => tab.id === selectedTab.id);
        const newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
        handleTabClick(tabs[newIndex]);
    };


    const nextTab = () => {
        const currentIndex = tabs.findIndex(tab => tab.id === selectedTab.id);
        const newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
        handleTabClick(tabs[newIndex]);
    };

    return (
        <>
            <div className='app-container'>
                {/* Navigation Bar */}
                <div className="nav">
                    <div className="heading">
                        <h1>Murthy's CVGoAT</h1>
                    </div>
                    <div className="right">
                        <div className="dropdown">
                            <button className="dropdown-toggle">
                                Resumes
                                <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                    <path d="M7 10l5 5 5-5z" />
                                </svg>
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                <Link to="/gemini">Resume Builder</Link>
                                    
                                </li>
                                <li className="dropdown-item">
                                    <a href="#/action-2">Resume Samples</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#/action-3">Why ATS Resume</a>
                                </li>
                            </ul>
                        </div>
                        <div className="signin">
                            Sign In
                        </div>
                        <div className="getStarted">
                            Get Started
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main">
                    <div className="head1">
                        <span>Elevate Your Job Applications with Our <b>Smart</b> Resume Builder!</span>
                    </div>
                    <div className="head2">
                        Build a professional and outstanding resume with our free builder and templates.
                    </div>

                    <div className="buttons">
                        <button className="btn create-resume">Create My Resume</button>
                        <button className="btn upload-resume">Upload Resume</button>
                    </div>
                </div>

                {/* Banner */}
                <div className="banner">
                    <img src={banner} alt="Banner" />
                </div>

                {/* Tab Navigation */}
                <div className="App">
                    <div className="navbar">
                        {/* <ul className="tab-list">
                        {tabs.map((tab) => (
                            <li
                                key={tab.id}
                                className={selectedTab.id === tab.id ? "active-tab" : ""}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab.name}
                            </li>
                        ))}
                        <div
                            className="tab-slider"
                            style={{
                                left: `${tabs.findIndex(tab => tab.id === selectedTab.id) * 120}px`,
                                width:`${selectedTab.name.length * 10}px`,  // Adjust width if necessary
                            }}
                        />
                    </ul> */}
                        <ul className="tab-list">
                            {tabs.map((tab, index) => (
                                <li
                                    key={tab.id}
                                    className={selectedTab.id === tab.id ? "active-tab" : ""}
                                    onMouseEnter={(e) => {
                                        setHoveredTabIndex(index);
                                        setHoveredTabWidth(e.target.offsetWidth); // Get the width of the hovered tab
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredTabIndex(null);
                                        setHoveredTabWidth(0);
                                    }}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Tab Arrows for Previous/Next */}
                    <div className="tab-navigation">
                        <div className="arrow left-arrow" onClick={previousTab}>
                            {/* SVG for left arrow */}
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <path d="M13.707 17.707a1 1 0 01-1.414 0L5.586 11l6.707-6.707a1 1 0 011.414 1.414L8.414 11l5.293 5.293a1 1 0 010 1.414z"></path>
                            </svg>
                        </div>

                        <div className="arrow right-arrow" onClick={nextTab}>
                            {/* SVG for right arrow */}
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <path d="M6.293 17.707a1 1 0 001.414 0L14.414 11 7.707 4.293a1 1 0 10-1.414 1.414L12.586 11l-5.293 5.293a1 1 0 000 1.414z"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">
                        {tabs.map((tab) => (
                            <div key={tab.id} id={tab.targetDiv} className={`content ${selectedTab.id === tab.id ? 'active' : ''}`}>
                                {selectedTab.id === tab.id && (
                                    <div>
                                        <img src={tab.image} alt={tab.name} />
                                        <p>{tab.name} Content</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeHome;
