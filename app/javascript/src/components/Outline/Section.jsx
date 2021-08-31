import React from "react";

import PropTypes from "prop-types";

import AddSubsection from "./AddSubsection";
import Subsection from "./Subsection";

const Section = ({ editOutline, fetchSubsections, section, subsections }) => {
  return (
    <div className="bg-white my-4 p-4 shadow">
      <div className="flex items-center justify-between">
        <h3>{section.name}</h3>
        {editOutline && <i className="ri-delete-bin-7-line p-1"></i>}
      </div>
      <div className="my-4">
        {subsections.map(subsection => (
          <Subsection key={subsection.id} subsection={subsection} />
        ))}
        {editOutline && (
          <AddSubsection
            fetchSubsections={fetchSubsections}
            sectionId={section.id}
          />
        )}
      </div>
    </div>
  );
};

Section.propTypes = {
  editOutline: PropTypes.bool,
  fetchSubsections: PropTypes.func,
  section: PropTypes.object,
  subsections: PropTypes.array
};

export default Section;
