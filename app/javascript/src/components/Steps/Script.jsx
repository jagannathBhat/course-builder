import React from "react";

import PropTypes from "prop-types";

import Modal from "components/Modal";

const Script = ({ action, closeScript, saveMessage, scriptText }) => {
  return (
    <Modal closeModal={() => closeScript(saveMessage !== "")}>
      <div
        className="bg-white flex flex-col max-w-4xl h-full p-2 shadow-sm w-full"
        style={{ maxHeight: "84vh" }}
      >
        <textarea
          placeholder="Enter script for subsection here"
          className="block flex-1 placeholder-gray-400 px-3 py-2 resize-none
          focus:outline-none transition duration-150 ease-in-out appearance-none sm:text-sm sm:leading-5"
          onChange={action}
          value={scriptText}
        ></textarea>
        <div className="text-gray-500 text-xs">{saveMessage}</div>
      </div>
    </Modal>
  );
};

Script.propTypes = {
  action: PropTypes.func,
  closeScript: PropTypes.func,
  saveMessage: PropTypes.string,
  scriptText: PropTypes.string
};

export default Script;
