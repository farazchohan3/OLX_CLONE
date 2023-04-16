import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import TopNav from "../TopNav";
import classes from "./Header.module.css";
import OlxLogo from "../../Assests/assets/OlxLogo";
import Search from "../../Assests/assets/Search";
import Arrow from "../../Assests/assets/Arrow";
import SellButton from "../../Assests/assets/SellButton";
import SellButtonPlus from "../../Assests/assets/SellButtonPlus";

import Navigation from "../Navigation";
function Header() {
  return (
    <Fragment>
      <div className={classes.containerParent}>
        <TopNav />
        <div className={classes.containerChild}>
          <div className={classes.brandName}>
            <OlxLogo></OlxLogo>
          </div>
          <div className={classes.placeSearch}>
            <Search></Search>
            <input type="text" />
            <Arrow></Arrow>
          </div>
          <div className={classes.productSearch}>
            <div className={classes.input}>
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
              />
            </div>
            <div className={classes.searchAction}>
              <Search color="#ffffff"></Search>
            </div>
          </div>
          <div className={classes.language}>
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          <div className={classes.loginPage}>
            <span>
              <NavLink to="/login">Login</NavLink>
            </span>
            <hr />
          </div>

          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </Fragment>
  );
}

export default Header;
