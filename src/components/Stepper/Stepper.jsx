import React, { useState } from "react";
import "./Stepper.css";

const Stepper = () => {
  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Info Content</div>,
    },
    {
      label: "Account Info",
      content: <div>Account Info Content</div>,
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>,
    },
    {
      label: "Review",
      content: <div>Review Content</div>,
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="main-container">
      <div className="stepper">
        {steps.map((step, index) => {
          return (
            <div className="stepper-container">
              <div className="step-number-container">
                <span className={`step-number ${index < currentStep + 1 ? 'active' : ''}`}>
                  {index + 1}
                </span>
                {
                  index !== steps.length - 1 && (
                    <span className={`step-line ${index < currentStep ? 'active' : ''}`}></span>
                  )
                }
              </div>
              <div className="step-label">{step.label}</div>
            </div>
          );
        })}
      </div>
      <div className="step-content">
        {steps[currentStep].content}
      </div>
      <div className="buttons">
        <button onClick={()=>setCurrentStep((prev)=> prev < steps.length-1 ? prev+1: prev)}>continue</button>
        <button onClick={()=>setCurrentStep((prev)=> prev > 0 ? prev-1: prev)}>back</button>
      </div>
    </div>
  );
};

export default Stepper;
