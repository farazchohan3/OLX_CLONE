import React from "react";
import bannerImg from "../../Assests/bannerAdd.jpeg";

export default function Banner() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img src={bannerImg} className="d-block w-100 img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={bannerImg} className="d-block w-100 img-fluid" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={bannerImg} className="d-block w-100 img-fluid" alt="..." />
        </div>
      </div>
    </div>
  );
}
