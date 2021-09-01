import React from "react";

import PropTypes from "prop-types";

import AddStep from "./AddStep";
import Step from "./Step";

const Subsection = ({
  editOutline,
  fetchSteps,
  steps,
  subsection: { id, name }
}) => {
  return (
    <div className="bg-white my-4 p-4 shadow">
      <h3>{name}</h3>
      {steps.length > 0 &&
        steps.map(step => (
          <div className="mt-4" key={step.id}>
            <Step
              editOutline={editOutline}
              fetchSteps={fetchSteps}
              step={step}
            />
          </div>
        ))}
      {editOutline && (
        <div className="mt-4 py-2">
          <AddStep fetchSteps={fetchSteps} subsectionId={id} />
        </div>
      )}
    </div>
  );
};

Subsection.propTypes = {
  editOutline: PropTypes.bool,
  fetchSteps: PropTypes.func,
  steps: PropTypes.array,
  subsection: PropTypes.object
};

export default Subsection;
