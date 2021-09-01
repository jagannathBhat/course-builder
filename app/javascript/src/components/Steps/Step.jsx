import React from "react";

import PropTypes from "prop-types";

import AddStep from "./AddStep";

const Step = ({ editOutline, fetchSteps, step, subsectionId }) => {
  const StepContent = () => {
    if (editOutline) {
      return (
        <AddStep
          fetchSteps={fetchSteps}
          subsectionId={subsectionId}
          step={step}
        />
      );
    }
    return <div className="flex-1">{step.content}</div>;
  };

  return (
    <div className="flex items-start">
      {step.column === 1 ? (
        <>
          <StepContent />
          <div className="flex-1"></div>
        </>
      ) : (
        <>
          <div className="flex-1"></div>
          <StepContent />
        </>
      )}
    </div>
  );
};

Step.propTypes = {
  editOutline: PropTypes.bool,
  fetchSteps: PropTypes.func,
  step: PropTypes.object,
  subsectionId: PropTypes.number
};

export default Step;
