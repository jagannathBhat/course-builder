import React, { useEffect, useState } from "react";

import sectionsApi from "apis/sections";
import subsectionsApi from "apis/subsections";
import PageLoader from "components/PageLoader";

import AddSection from "./AddSection";
import Section from "./Section";

const Accordion = () => {
  const [editOutline, setEditOutline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [subsections, setSubsections] = useState([]);

  const fetchSections = async () => {
    setLoading(true);
    try {
      const response = await sectionsApi.list();
      setSections(response.data.sections);
      await fetchSubsections();
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const fetchSubsections = async () => {
    try {
      const response = await subsectionsApi.list();
      setSubsections(response.data.subsections);
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchSections();
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
        <h2 className="text-center text-2xl">Outline</h2>
        <button
          className="text-center text-gray-500 text-sm focus:underline"
          onClick={() => setEditOutline(!editOutline)}
        >
          {editOutline ? "Done" : "Edit"}
        </button>
      </div>
      {sections &&
        sections.map(section => (
          <Section
            key={section.id}
            editOutline={editOutline}
            fetchSections={fetchSections}
            fetchSubsections={fetchSubsections}
            section={section}
            subsections={subsections.filter(
              subsection => subsection.section_id === section.id
            )}
          />
        ))}
      {editOutline && <AddSection fetchSections={fetchSections} />}
      {sections.length === 0 && !editOutline && (
        <p className="text-center text-gray-500">
          Click on edit to add a new section
        </p>
      )}
    </div>
  );
};

export default Accordion;
