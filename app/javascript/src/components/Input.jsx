import React from "react";

import PropTypes from "prop-types";

const Input = ({
  disabled = false,
  iconClass,
  label,
  placeholder,
  required = true,
  type = "text",
  value,
  onChange,
  onSubmit
}) => {
  return (
    <form className="mt-6" onSubmit={onSubmit}>
      {label && (
        <label className="block font-medium leading-5 text-bb-gray-700 text-sm">
          {label}
        </label>
      )}
      <div
        className="border border-gray-300 flex rounded-md mt-1 shadow-sm
        focus:shadow-outline-blue focus:border-blue-300 "
      >
        <input
          className="block flex-auto placeholder-gray-400 px-3 py-2
          focus:outline-none transition duration-150 ease-in-out appearance-none sm:text-sm sm:leading-5"
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
          onChange={onChange}
        />
        {iconClass && (
          <button className="px-3 py-2" disabled={disabled} type="submit">
            <i className={iconClass}></i>
          </button>
        )}
      </div>
    </form>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  iconClass: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Input;
