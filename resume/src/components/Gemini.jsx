import { useState } from "react";
import Home from "./Home";
import Analyzer from "./Analyzer";
import axios from "axios";
import '../CSS/Gemini.css'
function Gemini() {
  const [extractedText, setExtractedText] = useState("");
  const [analysis, setAnalysis] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(""); // New state for role

  const analyzeResume = async (text) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/analyze", { text, role });
      setAnalysis(response.data.analysis);
      // setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error during analysis:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleExtractedText = (text) => {
    setExtractedText(text);
    analyzeResume(text); // Call analyzeResume with the extracted text
  };

  return (
    <div>
      <Home setExtractedText={handleExtractedText} setRole={setRole} />
      {loading ? (
        <p>Loading analysis...</p>
      ) : (
        <>
          {extractedText && (
            <div>
              <h3>Extracted Text from Resume:</h3>
              <pre className="extracted-text">{extractedText}</pre>
            </div>
          )}
          {extractedText && (
            <div className="analysis-container">
              <Analyzer analysis={analysis} />
            </div>
          )}
        </>
      )}
    </div>
  );

}

export default Gemini;
