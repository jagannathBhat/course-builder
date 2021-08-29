import React from "react";

import Subsection from "./Subsection";

const Section = ({ section, subsections }) => {
  return (
    <div className="bg-white my-4 p-4 shadow">
      <div className="flex items-center justify-between">
        <h2>{section.name}</h2>
        <div>
          <i className="ri-add-fill p-1"></i>
          <i className="ri-pencil-line p-1"></i>
          <i className="ri-delete-bin-7-line p-1"></i>
        </div>
      </div>
      <div className="my-4">
        {subsections.map(subsection => (
          <Subsection key={subsection.id} subsection={subsection} />
        ))}
      </div>
    </div>
  );
};

export default Section;
