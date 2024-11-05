// ResumePreview.js
import React from 'react';

const ResumePreview = ({ data }) => {
  return (
    <div className="resume-preview">
      <h1>{data.heading.firstName} {data.heading.lastName}</h1>
      <p>{data.heading.email} | {data.heading.phone}</p>
      {/* Render other details like education, experience, etc. */}
    </div>
  );
};

export default ResumePreview;
