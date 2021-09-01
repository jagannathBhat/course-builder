import React from "react";

import PropTypes from "prop-types";

import sectionsApi from "apis/sections";

import AddSection from "./AddSection";
import AddSubsection from "./AddSubsection";
import Subsection from "./Subsection";

const Section = ({
  editOutline,
  fetchSections,
  fetchSubsections,
  section: { id, name },
  subsections
}) => {
  const deleteSection = async () => {
    try {
      await sectionsApi.destroy(id);
      await fetchSections();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div className="bg-white my-4 p-4 shadow">
      <div className="flex items-center justify-between">
        {editOutline ? (
          <AddSection
            fetchSections={fetchSections}
            sectionId={id}
            sectionName={name}
          />
        ) : (
          <h3>{name}</h3>
        )}
        {editOutline && (
          <button className="p-1 pl-2" onClick={deleteSection}>
            <i className="ri-delete-bin-7-line"></i>
          </button>
        )}
      </div>
      {subsections.length > 0 &&
        subsections.map(subsection => (
          <div className="mt-4" key={subsection.id}>
            <Subsection
              editOutline={editOutline}
              fetchSubsections={fetchSubsections}
              subsection={subsection}
            />
          </div>
        ))}
      {editOutline && (
        <div className=" mt-4 py-2">
          <AddSubsection fetchSubsections={fetchSubsections} sectionId={id} />
        </div>
      )}
    </div>
  );
};

Section.propTypes = {
  editOutline: PropTypes.bool,
  fetchSections: PropTypes.func,
  fetchSubsections: PropTypes.func,
  section: PropTypes.object,
  subsections: PropTypes.array
};

export default Section;
