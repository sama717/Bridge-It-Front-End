import React from "react";
import "./Form.css";
const BasicsForm = ({ nextStep, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value); 
  };
  return (
    <div className="form">
      <label>Name</label>
      <input
        type="text"
        name="title"
        placeholder="Enter your workspace name"
        onChange={handleInputChange}
      />
      <label>Category</label>
      <select name="category" onChange={handleInputChange}>
        <option value="">Choose your project category</option>
        <option value="IT">IT</option>
        <option value="CS">CS</option>
        <option value="IS">IS</option>
        <option value="OR">OR</option>
      </select>
      <label>Objective</label>
      <textarea
        name="description" 
        placeholder="Enter your project objectives"
        onChange={handleInputChange}
      />
      <button className="next-btn formbtn" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};
export default BasicsForm;