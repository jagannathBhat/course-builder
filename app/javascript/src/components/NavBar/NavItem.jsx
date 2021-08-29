import React from "react";

import { Link } from "react-router-dom";

const NavItem = ({ iconClass, name, path }) => {
  return (
    <Link
      to={path}
      className="font-semibold inline-flex items-center leading-5 mr-3 pt-1 px-1
      text-indigo-500 text-sm hover:text-indigo-500"
    >
      {iconClass && <i className={`${iconClass} text-bb-purple`}></i>}
      {name}
    </Link>
  );
};

export default NavItem;
