import React from "react";
import classes from "./Post.module.css";
import RecentPost from "./RecentPost";
import FreshRecomd from "./FreshRecomd";

function Posts() {
  return (
    <div className={classes.postParentDiv}>
      <RecentPost />
      <FreshRecomd />
    </div>
  );
}

export default Posts;
