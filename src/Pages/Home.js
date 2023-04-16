import React from "react";
import Banner from "../Componets/Banner/Banner";
import Posts from "../Componets/Posts/Posts";

export default function Home() {
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Banner />
      <Posts />
    </div>
  );
}
