import React, { useEffect, useRef, useState } from "react";

import stepsApi from "apis/steps";
import subsectionsApi from "apis/subsections";
import PageLoader from "components/PageLoader";

import Script from "./Script";
import Subsection from "./Subsection";

const Steps = () => {
  const timer = useRef(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [showScript, setShowScript] = useState(false);
  const [scriptSubsection, setScriptSubsection] = useState(null);
  const [scriptText, setScriptText] = useState("");
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

  const scriptClose = async changesMade => {
    setLoading(true);
    try {
      if (changesMade) await fetchSubsections();
      setScriptSubsection(null);
      setScriptText("");
      setShowScript(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      logger.error(error);
    }
  };

  const scriptOpen = async (id, text) => {
    setScriptSubsection(id);
    setScriptText(text);
    setShowScript(true);
  };

  const scriptUpdate = async () => {
    try {
      await subsectionsApi.update({
        id: scriptSubsection,
        payload: { subsection: { script: scriptText } }
      });
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (saveMessage !== "")
      timer.current = setTimeout(async () => {
        await scriptUpdate();
        setSaveMessage("All changes saved.");
      }, 2000);
  }, [scriptText]);

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
    <>
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
              scriptOpen={scriptOpen}
              subsection={subsection}
              steps={steps.filter(
                steps => steps.subsection_id === subsection.id
              )}
            />
          ))}
        {subsections.length === 0 && (
          <p className="text-center text-gray-500">
            Add subsections in Outline to start
          </p>
        )}
      </div>
      {showScript && (
        <Script
          action={e => {
            setSaveMessage("Saving...");
            setScriptText(e.target.value);
          }}
          closeScript={scriptClose}
          saveMessage={saveMessage}
          scriptText={scriptText}
          setScriptText={setScriptText}
        />
      )}
    </>
  );
};

export default Steps;
