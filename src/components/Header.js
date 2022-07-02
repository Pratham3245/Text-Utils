import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav
      className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                {props.pratham}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <div
              onClick={props.toggleMode}
              className={`bg-${
                props.mode === "light" ? "dark" : "light"
              } rounded mx-2`}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>

          <label
            className={`form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            Toggle Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
Header.propTypes = { title: PropTypes.string, pratham: PropTypes.string };
