import React from "react";
import { NavLink } from "react-router-dom";
import "../ProtoStyles/Proto-Nav.css";
function ProtoNav(props) {
  return (
    <>
      <nav className="proto navbar navbar-expand-lg px-5 bg-white ">
        <div className="container-fluid  ">
          <NavLink className="LogoJob navbar-brand" to="/">
            JOBS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="create-cv">
                  Create Your Cv
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="find-job">
                  Find Job
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="post-job">
                  Post Job
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <NavLink to="login" className="btn  rounded-5 px-3 ">
                  Sign-In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="register-seeker"
                  className="btn btn-success mx-lg-3 mx-0 my-lg-0 my-2 rounded-5 px-3"
                >
                  Sign-Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="register-emp"
                  className="btn btn-success rounded-5 px-3"
                >
                  Employer
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ProtoNav;
