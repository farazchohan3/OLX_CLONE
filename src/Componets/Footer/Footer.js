import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-dark  "
      style={{ backgroundColor: "#ebeeef" }}
    >
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3 pt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold"
                style={{ fontSize: ".9em" }}
              >
                POPULAR CATEGORIES
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-dark">
                  Cars
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Mobile Phones
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Flat for rent
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Jobs
                </a>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold"
                style={{ fontSize: ".9em" }}
              >
                TRENDING SEARCHES
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-dark">
                  Bikes
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Watches
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Books
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Dogs
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold"
                style={{ fontSize: ".9em" }}
              >
                ABOUT US
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundCollor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-dark">
                  About EMPG
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  OLX Blog
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  OLX for Businesses
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold"
                style={{ fontSize: ".9em" }}
              >
                OLX
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundCollor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-dark">
                  Help
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Sitemap
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Terms of use
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold"
                style={{ fontSize: ".9em" }}
              >
                Contact
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> Jaranwala, Pakistan
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>{" "}
                muhammadafraz101@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 92341-2727124
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 92304-2190007
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "#002F34" }}
      >
        © 2020 Copyright olx-Clone | Developed by{" "}
        <a className="text-white" href="mailto:muhammadafraz101@gmail.com">
          Muhammad Afraz
        </a>
      </div>
    </footer>
  );
}
