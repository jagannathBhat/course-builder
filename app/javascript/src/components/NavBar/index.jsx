import React from "react";

import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="px-2 lg:px-0">
            <h1 className="text-lg">Course Builder</h1>
          </div>
          <div className="flex">
            <div className="px-2 lg:px-0">
              <NavItem name="Outline" path="/" />
            </div>
            <div className="px-2 lg:px-0">
              <NavItem name="Storyboard" path="/storyboard" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
