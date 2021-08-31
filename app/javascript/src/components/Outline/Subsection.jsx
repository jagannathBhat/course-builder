import React from "react";

import PropTypes from "prop-types";

import AddSubsection from "./AddSubsection";

const Subsection = ({
  editOutline,
  fetchSubsections,
  sectionId,
  subsection: { id, name }
}) => {
  return (
    <div className="flex items-center justify-between pl-8 pr-2 py-2 hover:bg-gray-300">
      {editOutline ? (
        <AddSubsection
          fetchSubsections={fetchSubsections}
          sectionId={sectionId}
          subsectionId={id}
          subsectionName={name}
        />
      ) : (
        <h4>{name}</h4>
      )}
      <div>{editOutline && <i className="ri-delete-bin-7-line p-1"></i>}</div>
    </div>
  );
};

Subsection.propTypes = {
  editOutline: PropTypes.bool,
  fetchSubsections: PropTypes.func,
  sectionId: PropTypes.number,
  subsection: PropTypes.object
};

export default Subsection;
