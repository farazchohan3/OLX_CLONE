import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";
export default function Card({ id, name, price, location, imgUrl, postedDay }) {
  return (
    <div className={`col-2 ${classes.parent} mb-4 ms-4 border border-2`}>
      <img
        src={imgUrl}
        className="card-img-top img fluid "
        style={{
          width: "100%",
          marginTop: "1em",
        }}
        alt="Img ad"
      />
      <NavLink to={`/${id}`} style={{ color: "black" }}>
        <div className={classes.cardBody}>
          <h6 className={classes.heading}>{name}</h6>
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            style={{ color: "#656667" }}
          />
        </div>
        <h6>Rs.{price}</h6>
        <div className={classes.cardFooter}>
          <p className={classes.footerContent}>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="xs"
              style={{ color: "#808185" }}
            />
            {location} | <span>{postedDay}</span>
          </p>
        </div>
      </NavLink>
    </div>
  );
}
