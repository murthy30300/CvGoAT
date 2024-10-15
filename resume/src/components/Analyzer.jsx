import React from 'react';
import { marked } from 'marked';

export default function Analyzer({ analysis }) {
  // Convert analysis text from Markdown to HTML
  const createMarkup = (text) => {
    return { __html: marked(text) };
  };

  return (
    <div>
      <h3>ATS Analysis:</h3>
      <div dangerouslySetInnerHTML={createMarkup(analysis)} />
    </div>
  );
}

{/* <h3>Suggestions for Improvement:</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul> */}
