import React from "react";
import avatar from "../../Assests/FooterImg/avatar.png";
export default function SellerDescription(props) {
  return (
    <div className="row">
      <div className="col-12 border border-2 mt-2 py-2">
        <div className="row">
          <div className="col-12 d-flex ">
            <p className=" fw-bold fs-5">Seller Description</p>
          </div>

          <div className="col-12 d-flex ">
            <img
              src={avatar}
              alt="Avtar"
              style={{ width: "80px" }}
              className="img-fluid"
            />
            <div>
              <h5 className="mt-3 ms-2">{props.sellerName}</h5>
              <p className="mt-1 ms-2">Member Since April, 2023</p>
            </div>
          </div>

          <div className="col-12">
            <button className=" col-11 m-auto mt-2 btn btn-primary">
              <a href={`tel:${props.sellerContact}`} className="text-white">
                Chat With Seller
              </a>
            </button>
          </div>
          <div className="col-12 text-center">
            <p className="fw-bold mt-2">Contact No: {props.sellerContact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
