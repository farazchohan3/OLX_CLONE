import React from "react";

export default function Carousel(props) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide w-sm-100"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={props.img}
            className="d-block w-100 img-fluid"
            alt="..."
            style={{ width: "80%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={props.img}
            className="d-block w-100 img-fluid"
            alt="..."
            style={{ width: "80%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={props.img}
            className="d-block w-100 img-fluid"
            alt="..."
            style={{ width: "80%" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
