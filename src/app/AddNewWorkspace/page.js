"use client";

import React, { useState } from 'react';
import Header from '../components/AddnewWorkspaceComponents/Header';
import ProgressBar from '../components/AddnewWorkspaceComponents/ProgressBar';
import BasicsForm from '../components/AddnewWorkspaceComponents/Form';
import StageForm from '../components/AddnewWorkspaceComponents/StageForm';
// import TemplateStage from '../components/AddnewWorkspaceComponents/TemplateStage';
import InvitationForm from '../components/AddnewWorkspaceComponents/InvitationFrom'; 
import Styles from './page.module.css';

const AddWorkspace = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className={Styles.page}>
     
      {currentStep !== 3 && (
        <>
          <Header />
          <ProgressBar currentStep={currentStep} />
        </>
      )}

      {currentStep === 1 && <BasicsForm nextStep={nextStep} />}
      {currentStep === 2 && <StageForm prevStep={prevStep} nextStep={nextStep} />}
      {/* {currentStep === 3 && <TemplateStage prevStep={prevStep} nextStep={nextStep} />} */}
      {currentStep === 3 && <InvitationForm nextStep={nextStep} />} 
    </div>
  );
};

export default AddWorkspace;
