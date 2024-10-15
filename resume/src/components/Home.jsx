import { useState } from "react";
import axios from "axios";
import '../CSS/Home.css'

export default function Home({ setExtractedText, setRole }) {
  const [file, setFile] = useState(null);
  const [role, setInputRole] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('role', role);
    // console.log(role)

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setExtractedText(response.data.text); // Set extracted text from the response
      setRole(role); // Set the role for further analysis
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="input-container">
    <div className="input-title">Upload Your PDF</div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6V4H14V2ZM14 10H6V12H14V10ZM14 18H6V20H14V18ZM18 2H20V4H18V2ZM18 10H20V12H18V10ZM18 18H20V20H18V18Z" fill="#000"/>
</svg>
    <input type="file" accept=".pdf" onChange={handleChange} />
    <input 
        type="text" 
        placeholder="Mention Role" 
        value={role} 
        onChange={(e) => setInputRole(e.target.value)} 
    />
    <button onClick={handleUpload}>Upload</button>
</div>
  );
}
