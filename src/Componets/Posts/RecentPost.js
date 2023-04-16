import React from "react";
import classes from "./Post.module.css";
import { products } from "../../Store";
import Card from "../UI/Card";

export default function RecentPost() {
  return (
    <div className={classes.moreView}>
      <div className={classes.heading}>
        <h5>More on recent Ads</h5>
        <a href="/">
          <span>View more</span>
        </a>
      </div>
      <div className="container-fluid">
        <div className={`${classes.recentPostContainer}`}>
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
