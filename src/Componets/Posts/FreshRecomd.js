import React from "react";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

export default function FreshRecomd() {
  const products = useSelector((state) => state.products);

  return (
    <div className="recommendations">
      <h4>Fresh recommendations</h4>
      <div className="container-fluid">
        <div className="row">
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
