// "use client";
// import React, { useState } from "react";
// import Header from "../../../components/CreateGroupComponents/header";
// import ProgressBar from "../../../components/CreateGroupComponents/ProgressBar";
// import BasicsForm from "../../../components/CreateGroupComponents/Form";
// import StageForm from "../../../components/CreateGroupComponents/StageForm";
// import InvitationForm from "../../../components/CreateGroupComponents/invitationForm";
// import Styles from "./page.module.css";


// const AddWorkspace = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     stage: "",
//     deadline: "",
//   });

//   const nextStep = () => setCurrentStep((prev) => prev + 1);
//   const prevStep = () => setCurrentStep((prev) => prev - 1);
//   const handleBasicsFormChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value })); 
//   };

//   const handleStageFormChange = (stage, deadline) => {
//     setFormData((prev) => ({ ...prev, stage, deadline }));
//   };

//   const handleSubmit = async () => {
//     const token = localStorage.getItem("token");
   
//     console.log(token)
//     console.log("Form Data:", formData);

//     try {
//       const response = await fetch("https://api.bridgeit.site/api/groups/store", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       console.log("Response from server:", result);
//       localStorage.setItem("groupId", result.group.id);


//       if (response.ok) {
//         alert("Group created successfully!");
//         nextStep();
//       } else {
//         alert(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while creating the group.");
//     }
//   };

//   return (
//     <div className={Styles.page}>
//       {currentStep !== 3 && (
//         <>
//           <Header />
//           <ProgressBar currentStep={currentStep} />
//         </>
//       )}
//       {currentStep === 1 && (
//         <BasicsForm nextStep={nextStep} onChange={handleBasicsFormChange} />
//       )}
//       {currentStep === 2 && (
//         <StageForm
//           prevStep={prevStep}
//           nextStep={handleSubmit}
//           onChange={handleStageFormChange}
//         />
//       )}
//       {currentStep === 3 && <InvitationForm nextStep={nextStep} />}
//     </div>
//   );
// };
// export default AddWorkspace;

"use client";
import React, { useState } from "react";
import Header from "../../../components/CreateGroupComponents/header";
import ProgressBar from "../../../components/CreateGroupComponents/ProgressBar";
import BasicsForm from "../../../components/CreateGroupComponents/Form";
import StageForm from "../../../components/CreateGroupComponents/StageForm";
import InvitationForm from "../../../components/CreateGroupComponents/invitationForm";
import Styles from "./page.module.css";

const AddWorkspace = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stage: "",
    deadline: "",
  });
  const [groupId, setGroupId] = useState(null); // Store the group ID
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const handleBasicsFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleStageFormChange = (stage, deadline) => {
    setFormData((prev) => ({ ...prev, stage, deadline }));
  };
  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    console.log("Form Data:", formData);
    try {
      const response = await fetch("https://api.bridgeit.site/api/groups/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Response from server:", result);
      if (response.ok) {
        const groupId = result.group.id;
        setGroupId(groupId); // Store in state
        localStorage.setItem("groupId", groupId); // Store in localStorage
        nextStep();
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the group.");
    }
  };
  return (
    <div className={Styles.page}>
      {currentStep !== 3 && (
        <>
          <Header />
          <ProgressBar currentStep={currentStep} />
        </>
      )}
      {currentStep === 1 && (
        <BasicsForm nextStep={nextStep} onChange={handleBasicsFormChange} />
      )}
      {currentStep === 2 && (
        <StageForm prevStep={prevStep} nextStep={handleSubmit} onChange={handleStageFormChange} />
      )}
      {currentStep === 3 && <InvitationForm groupId={groupId} />}
    </div>
  );
};
export default AddWorkspace;
