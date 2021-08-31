import React from "react";

import PropTypes from "prop-types";

const Subsection = ({ subsection }) => {
  return (
    <div className="flex items-center justify-between pl-8 pr-2 py-2 hover:bg-gray-300">
      <h4>{subsection.name}</h4>
      <div>
        <i className="ri-pencil-line p-1"></i>
        <i className="ri-delete-bin-7-line p-1"></i>
      </div>
    </div>
  );
};

Subsection.propTypes = {
  subsection: PropTypes.object
};

export default Subsection;
