import React from "react";
import olxLogo from "../Assests/olx-logo-vector-1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faBuilding } from "@fortawesome/free-solid-svg-icons";
import classes from "./TopNav.module.css";
import { NavLink } from "react-router-dom";
export default function TopNav() {
  return (
    <div className={classes.container}>
      <NavLink to="/">
        <img src={olxLogo} className={classes.navLogo} alt="Olx Logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/comingsoon" className={classes.navLink}>
              <span>
                <FontAwesomeIcon
                  icon={faCar}
                  size="lg"
                  className={classes.carIcon}
                />
              </span>
              MOTORS
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={classes.navLink}>
              <span>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className={classes.carIcon}
                  size="lg"
                />
              </span>{" "}
              PROPERTY
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
