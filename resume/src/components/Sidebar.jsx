// Sidebar.js
import React from 'react';

const Sidebar = ({ setActiveSection }) => {
  const sections = ["Heading", "Education", "Experience", "Projects", "Skills", "Achievements", "Certifications"];
  return (
    <div className="sidebar">
      {sections.map((section) => (
        <button key={section} onClick={() => setActiveSection(section)}>
          {section}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
