import React from "react";

const Subsection = ({ subsection }) => {
  return (
    <div className="flex items-center justify-between pl-8 pr-2 py-2 hover:bg-gray-300">
      <h3>{subsection.name}</h3>
      <div>
        <i className="ri-pencil-line p-1"></i>
        <i className="ri-delete-bin-7-line p-1"></i>
      </div>
    </div>
  );
};

export default Subsection;
