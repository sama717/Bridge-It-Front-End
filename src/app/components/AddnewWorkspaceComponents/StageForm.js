/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import './StageForm.css';

const StageForm = ({ prevStep, nextStep }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const renderFilePreview = () => {
    if (selectedFile) {
      if (selectedFile.type.startsWith('image/')) {
        return <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="file-preview" />;
      } else {
        return <p className="file-preview-text">{selectedFile.name}</p>;
      }
    }
    return null;
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Project's Current Stage</h3>
      <div className="radio-group">
        <label className="radio-option">
          <input type="radio" name="stage" />
          <span style={{fontSize:"13px"}}>Idea Planning</span>
        </label>
        <label className="radio-option">
          <input type="radio" name="stage" />
          <span style={{fontSize:"13px"}}>Research Phase</span>
        </label>
        <label className="radio-option">
          <input type="radio" name="stage" />
          <span style={{fontSize:"13px"}}>Development</span>
        </label>
        <label className="radio-option">
          <input type="radio" name="stage" />
          <span style={{fontSize:"13px"}}>Review</span>
        </label>
        <label className="radio-option">
          <input type="radio" name="stage" />
          <span style={{fontSize:"13px"}}>Finalization</span>
        </label>
      </div>

      <div className="checkbox-container">
  <label className="checkbox-option">
    <input type="checkbox" />
    <span className='span'>Use AI Suggestions to guide you through workspace creation</span>
  </label>
</div>


      <div className="media-container">
        <label className="media-label">Media (Optional)</label>
        <div className="media-upload">
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            className="file-input"
            accept="image/*,video/*"
          />
          <label htmlFor="file-input" className="file-label">
             Drop your related files here or click to upload
          </label>
        </div>
        {renderFilePreview()}
      </div>

      <div className="deadline-container">
        <label className="deadline-label">Deadline</label>
        <input type="date" className="deadline-input" />
      </div>

      <div className="button-container">
        <button className="back-btn bak" onClick={prevStep}>
          Back
        </button>
        {/* <button className="next-btn nex" onClick={nextStep}> */}
        <button className="next-btn nex" onClick={nextStep} >
          Finish
        </button>
      </div>
    </div>
  );
};

export default StageForm;
