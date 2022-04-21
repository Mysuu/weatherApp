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
          <NavLink
            to="/hourly"
            className={({ isActive }) =>
              isActive ? "activeClassName" : undefined
            }
          >
            Hourly
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/10days"
            className={({ isActive }) =>
              isActive ? "activeClassName" : undefined
            }
          >
            10 days
          </NavLink>
        </li>
        <li>
          <NavLink to="/monthly">Monthly</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
