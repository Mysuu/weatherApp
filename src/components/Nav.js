import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="selected">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeClassName" : undefined
            }
          >
            Today
          </NavLink>
        </li>
        <li>
          <NavLink to="/hourly">Hourly</NavLink>
        </li>
        <li>
          <NavLink to="/10days">10 days</NavLink>
        </li>
        <li>
          <NavLink to="/monthly">Monthly</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
