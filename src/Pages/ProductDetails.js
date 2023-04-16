import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
// Components
import Carousel from "../Componets/UI/Carousel";
import SellerDescription from "../Componets/UI/SellerDescription";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  const param = useParams();
  const productid = parseInt(param.id);
  const products = useSelector((state) => state.products);
  const newArray = products.filter((item) => item.id === productid);
  const filterItem = newArray.pop();

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "95%", margin: "0% auto" }}>
        <div className="container-fluid mt-2">
          <div className="row mt-3">
            <div className="col-lg-7 col-md-6 border border-3 mb-2 me-3 py-2">
              <Carousel img={filterItem.imgUrl} />
              <img
                src={filterItem.imgUrl}
                alt="laptop Img"
                className="prodcut-detailImg py-3 "
                style={{ width: "80%", margin: "0% auto" }}
              />
            </div>
            {/* side Box Start */}
            <div className="col-lg-4 col-md-4 ">
              <div className="row">
                <div className="col-12 border border-2 py-3">
                  <div className="row">
                    <div className="col-7 d-flex ">
                      <h2 className="display-6 fw-bold">
                        Rs.{filterItem.price}
                      </h2>
                    </div>
                    <div className="col-5 d-flex justify-content-between align-items-center">
                      <FontAwesomeIcon
                        icon={faShareNodes}
                        size="xl"
                        style={{ color: "#828487" }}
                      />
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="xl"
                        style={{ color: "#656667" }}
                      />
                    </div>
                    <div className="col-12">
                      <p className="fw-bold fs-6">{filterItem.name}</p>
                    </div>
                    <div className="col-12">
                      <p className="fw-bold ">
                        Location: {filterItem.location} |
                        <span>{filterItem.postedDay}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-2 border border-2 mt-2 py-2">
                  <h5 className="fw-bold">Posted In</h5>
                  <p className="">Location: {filterItem.location} </p>
                </div>
              </div>
              <SellerDescription
                sellerName={filterItem.ownerName}
                sellerContact={filterItem.contact}
              />
            </div>
            {/* Side Box End */}
          </div>
          <div className="row ">
            <div className="col-lg-7 col-md-6 border border-2 mt-2">
              <h4>Details</h4>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Price</p>
                <p>{filterItem.price}</p>
                <p className="fw-bold">Condtion</p>
                <p> {filterItem.Condtion}</p>
              </div>
              <h4>Description</h4>
              <p>{filterItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
