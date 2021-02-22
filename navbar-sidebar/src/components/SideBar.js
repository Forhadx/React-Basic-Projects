import React from "react";
import Backdrop from './Backdrop/Backdrop';
import "./Sidebar.css";

const Sidebar = props => {
  console.log('open')

  let attachedClasses = ['sidebar', 'Close'];
  if (props.open) {
      attachedClasses = ['sidebar', 'Open'];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <a className="logo">
          <img
            src="https://linustechtips.com/uploads/profile/photo-223215.gif"
            alt="picture"
          />
        </a>
        <ul className="sidebar-items">
          <li className="sidebar-item">
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#news">News</a>
          </li>
          <li className="sidebar-item">
            <a href="#contact">Contact</a>
          </li>
          <li className="sidebar-item">
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
