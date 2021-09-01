import React, { useEffect, useState } from "react";

import stepsApi from "apis/steps";
import subsectionsApi from "apis/subsections";
import PageLoader from "components/PageLoader";

import Subsection from "./Subsection";

const Steps = () => {
  const [editOutline, setEditOutline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [subsections, setSubsections] = useState([]);
  const [steps, setSteps] = useState([]);

  const fetchSubsections = async () => {
    setLoading(true);
    try {
      const response = await subsectionsApi.list();
      setSubsections(response.data.subsections);
      await fetchSteps();
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const fetchSteps = async () => {
    try {
      const response = await stepsApi.list();
      setSteps(response.data.steps);
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchSubsections();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between my-4">
        <h2 className="text-center text-2xl">Storyboard</h2>
        <button
          className="text-center text-gray-500 text-sm focus:underline"
          onClick={() => setEditOutline(!editOutline)}
        >
          {editOutline ? "Done" : "Edit"}
        </button>
      </div>
      {subsections &&
        subsections.map(subsection => (
          <Subsection
            key={subsection.id}
            editOutline={editOutline}
            fetchSteps={fetchSteps}
            subsection={subsection}
            steps={steps.filter(steps => steps.subsection_id === subsection.id)}
          />
        ))}
      {subsections.length === 0 && (
        <p className="text-center text-gray-500">
          Add subsections in Outline to start
        </p>
      )}
    </div>
  );
};

export default Steps;
