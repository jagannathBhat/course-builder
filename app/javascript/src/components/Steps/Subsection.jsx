import React from "react";

import PropTypes from "prop-types";

import AddStep from "./AddStep";
import Step from "./Step";

const Subsection = ({
  editOutline,
  fetchSteps,
  scriptOpen,
  sectionName,
  steps,
  subsection: { id, name, script }
}) => {
  return (
    <div className="bg-white my-4 p-4 shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">
          {name + " "}
          <small className="text-sm text-gray-600">{sectionName}</small>
        </h3>
        <button onClick={() => scriptOpen(id, script ? script : "")}>
          <i className="ri-sticky-note-line"></i>
        </button>
      </div>
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
  scriptOpen: PropTypes.func,
  sectionName: PropTypes.string,
  steps: PropTypes.array,
  subsection: PropTypes.object
};

export default Subsection;
