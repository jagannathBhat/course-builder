import React, { useEffect, useState } from "react";

import Button from "components/Button";

import Section from "./Section";

const DUMMY_SECTIONS = [
  { id: 1, name: "Introduction" },
  { id: 2, name: "Git, GitHub, GitLab" }
];

const DUMMY_SUBSECTIONS = [
  { id: 1, name: "Introduction to Course", section_id: 1 },
  { id: 2, name: "Course Outline", section_id: 1 },
  { id: 3, name: "Version Control System", section_id: 2 },
  { id: 4, name: "Git", section_id: 2 }
];

const Accordion = () => {
  const [sections, setSections] = useState([]);
  const [subsections, setSubsections] = useState([]);

  useEffect(() => {
    setSections(DUMMY_SECTIONS);
    setSubsections(DUMMY_SUBSECTIONS);
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      {sections.map(section => (
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
