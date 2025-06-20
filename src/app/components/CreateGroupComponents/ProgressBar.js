import React from 'react';
import './ProgresBar.css';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-bar">
      <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep === 1 ? 'current' : ''}`}>
        <div className="circle">
          {currentStep > 1 && <span className="checkmark">✔</span>}
        </div>
        <span>Basics</span>
      </div>

      <div className={`line ${currentStep > 1 ? 'filled' : ''}`}></div>

      <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep === 2 ? 'current' : ''}`}>
        <div className="circle">
          {currentStep > 2 && <span className="checkmark">✔</span>}
        </div>
        <span>Stage</span>
      </div>

      {/* <div className={`line ${currentStep > 2 ? 'filled' : ''}`}></div> */}

      {/* <div className={`step ${currentStep >= 3 ? 'active' : ''} ${currentStep === 3 ? 'current' : ''}`}>
        <div className="circle">
          {currentStep > 3 && <span className="checkmark">✔</span>}
        </div>
        <span>Templates</span>
      </div> */}
    </div>
  );
};

export default ProgressBar;