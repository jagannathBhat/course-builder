import React from "react";

import PropTypes from "prop-types";

const Button = ({
  children,
  color = "bb-purple",
  loading,
  type = "button",
  onClick
}) => {
  return (
    <div className="mt-6">
      <button
        type={type}
        onClick={onClick}
        className={`bg-${color} border border-transparent duration-150 ease-in-out flex font-medium group
        justify-center leading-5 relative rounded-md text-white transition px-4 py-2 text-sm w-full
        hover:bg-opacity-90 focus:outline-none`}
      >
        {loading ? "Loading..." : children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;
