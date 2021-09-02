import React from "react";

import PropTypes from "prop-types";

import Button from "components/Button";
import Modal from "components/Modal";

const Script = ({ action, closeScript, scriptText, setScriptText }) => {
  return (
    <Modal closeModal={closeScript}>
      <div
        className="bg-white max-w-4xl h-full p-2 shadow-sm w-full"
        style={{ maxHeight: "84vh" }}
      >
        <textarea
          placeholder="Enter script for subsection here"
          className="block flex-auto h-full placeholder-gray-400 px-3 py-2 w-full
          focus:outline-none transition duration-150 ease-in-out appearance-none sm:text-sm sm:leading-5"
          onChange={e => setScriptText(e.target.value)}
          value={scriptText}
        ></textarea>
        <Button
          onClick={async () => {
            await action();
            closeScript();
          }}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

Script.propTypes = {
  action: PropTypes.func,
  closeScript: PropTypes.func,
  scriptText: PropTypes.string,
  setScriptText: PropTypes.func
};

export default Script;
