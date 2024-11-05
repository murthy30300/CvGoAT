// ResumeForm.js
import React from 'react';
import axios from 'axios';

const ResumeForm = ({ data }) => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://gemini-api.com/analyze', data); // Replace with actual API endpoint
      // Assuming the response contains ATS-optimized data
      const optimizedData = response.data;
      // Update resumeData with optimized data
      // Possibly trigger a re-render of ResumePreview
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <button onClick={handleSubmit}>Generate Resume</button>
  );
};
// Include a download button in ResumePreview.js or ResumeForm.js
import { PDFDownloadLink } from '@react-pdf/renderer';

const ResumeDownloadButton = ({ data }) => (
  <PDFDownloadLink document={<ResumeDocument data={data} />} fileName="resume.pdf">
    {({ loading }) => (loading ? "Loading document..." : "Download Resume")}
  </PDFDownloadLink>
);


export default ResumeForm;
