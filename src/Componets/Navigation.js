import React from "react";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Catogries
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/">
                  1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  2
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  3
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Mobile Phones
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Mobile Phones
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Houses
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Cars
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Motorcycles
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
