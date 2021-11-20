import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/home"
        className={(navName) => (navName.isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={(navName) => (navName.isActive ? "active" : "")}
      >
        products
      </NavLink>
      <NavLink
        to="/products/edit"
        className={(navName) => (navName.isActive ? "active" : "")}
      >
        Edit
      </NavLink>
    </div>
  );
};

export default Header;
