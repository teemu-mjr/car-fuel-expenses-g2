import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Fueling tracker
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/add">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/history">
              History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
