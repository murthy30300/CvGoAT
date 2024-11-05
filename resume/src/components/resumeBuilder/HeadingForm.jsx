// HeadingForm.js
import React from 'react';

const HeadingForm = ({ data, setData }) => {
  return (
    <div>
      <label>First Name:</label>
      <input type="text" value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value})} />
      {/* Repeat for other fields like Last Name, LinkedIn, etc. */}
    </div>
  );
};

export default HeadingForm;
