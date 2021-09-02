import React from "react";

import PropTypes from "prop-types";

const Modal = ({ children, closeModal }) => {
  return (
    <div
      className="bg-nitro-gray-800-aa fixed flex h-full items-center justify-center left-0 top-0 w-full"
      id="modal"
      onClick={e => {
        if (e.target === document.getElementById("modal")) closeModal();
      }}
    >
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  closeModal: PropTypes.func
};

export default Modal;
