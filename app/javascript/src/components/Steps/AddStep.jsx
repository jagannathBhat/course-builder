import React, { useState } from "react";

import PropTypes from "prop-types";

import stepsApi from "apis/steps";
import Input from "components/Input";

import InputAdd from "./InputAdd";

const AddStep = ({ fetchSteps, step = { content: "" }, subsectionId }) => {
  const [content, setContent] = useState(step.content);
  const [loading, setLoading] = useState(false);

  const stepAdd = async column => {
    setLoading(true);
    try {
      await stepsApi.create({
        step: { column, content, subsection_id: subsectionId }
      });
      setLoading(false);
      fetchSteps();
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const stepDelete = async () => {
    try {
      await stepsApi.destroy(step.id);
      await fetchSteps();
    } catch (error) {
      logger.error(error);
    }
  };

  const stepUpdate = async () => {
    setLoading(true);
    try {
      await stepsApi.update({
        id: step.id,
        payload: { step: { ...step, content } }
      });
      setLoading(false);
      fetchSteps();
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex-auto">
      {step.id ? (
        <div className="flex">
          <div className="flex-auto">
            <Input
              disabled={loading}
              iconClass="ri-check-line"
              value={content}
              onChange={e => setContent(e.target.value)}
              onSubmit={() => stepUpdate()}
            />
          </div>
          <button className="pl-2" onClick={stepDelete}>
            <i className="ri-delete-bin-7-line"></i>
          </button>
        </div>
      ) : (
        <InputAdd loading={loading} stepAdd={stepAdd} setContent={setContent} />
      )}
    </div>
  );
};

AddStep.propTypes = {
  fetchSteps: PropTypes.func,
  step: PropTypes.object,
  subsectionId: PropTypes.number
};

export default AddStep;
