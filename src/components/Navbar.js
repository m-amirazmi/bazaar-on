import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <div className="container">
          <Link to={"/"} className="brand-logo center">
            BAZAAR
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
          <ul className="left">
            <li>
              <Link
                to={"/location"}
                className="btn grey lighten-4 grey-text location-home"
              >
                <span>Setapak Central Mall</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
