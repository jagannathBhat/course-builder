import React, { useEffect, useState } from "react";

import sectionsApi from "apis/sections";
import subsectionsApi from "apis/subsections";
import Button from "components/Button";
import PageLoader from "components/PageLoader";

import Section from "./Section";

const Accordion = () => {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [subsections, setSubsections] = useState([]);

  const fetchSections = async () => {
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
      {sections &&
        sections.map(section => (
          <Section
            key={section.id}
            section={section}
            subsections={subsections.filter(
              subsection => subsection.section_id === section.id
            )}
          />
        ))}
      <Button color="bb-gray-600">Add Section</Button>
    </div>
  );
};

export default Accordion;
