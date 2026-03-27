import React from "react";
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
  return (
    <div>
      <h2>Stepper Component</h2>
      <div>
        {steps.map((step, index) => {
          return (
            <div style={{display: 'flex'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span className="step_number">{index + 1}</span>
                <span className="step_line"></span>
              </div>
              <span>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
