import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className="navbar">
      <a className="logo"><img src="https://linustechtips.com/uploads/profile/photo-223215.gif" alt="picture" /></a>
      <ul className="navbar-items">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <div className="DrawerToggle" onClick={props.drawerToggleClicked} >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
