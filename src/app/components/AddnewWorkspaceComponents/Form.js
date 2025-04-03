import React from 'react';
import './Form.css';

const BasicsForm = ({ nextStep }) => {
  return (
    <div className="form">
      <label>Name</label>
      <input type="text" placeholder="Enter your workspace name" />

      <label>Category</label>
      <select>
        <option>Choose your project category</option>
      </select>

      <label>Objective</label>
      <textarea placeholder="Enter your project objectives"></textarea>

      <button className="next-btn" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default BasicsForm;
