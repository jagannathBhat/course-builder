import React from "react";

import PropTypes from "prop-types";

import AddSection from "./AddSection";
import AddSubsection from "./AddSubsection";
import Subsection from "./Subsection";

const Section = ({
  editOutline,
  fetchSubsections,
  section: { id, name },
  subsections
}) => {
  return (
    <div className="bg-white my-4 p-4 shadow">
      <div className="flex items-center justify-between">
        {editOutline ? (
          <AddSection
            fetchSubsections={fetchSubsections}
            sectionId={id}
            sectionName={name}
          />
        ) : (
          <h3>{name}</h3>
        )}
        {editOutline && <i className="ri-delete-bin-7-line p-1 pl-2"></i>}
      </div>
      <div className="my-4">
        {subsections.map(subsection => (
          <Subsection
            key={subsection.id}
            editOutline={editOutline}
            fetchSubsections={fetchSubsections}
            subsection={subsection}
          />
        ))}
        {editOutline && (
          <div className="py-2">
            <AddSubsection fetchSubsections={fetchSubsections} sectionId={id} />
          </div>
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
