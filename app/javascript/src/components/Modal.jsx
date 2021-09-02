import React from "react";

import PropTypes from "prop-types";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="bg-nitro-gray-800-aa fixed flex h-full items-center justify-center left-0 top-0 w-full">
      {children}
      <button
        className="fixed m-4 right-0 text-gray-300 text-xl top-0"
        onClick={closeModal}
      >
        <i className="ri-close-circle-fill"></i>
      </button>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  closeModal: PropTypes.func
};

export default Modal;
