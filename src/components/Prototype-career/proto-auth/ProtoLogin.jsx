import React, { useEffect, useState } from "react";
import "../ProtoStyles/Proto-Auth/Auth-Login.css";
import { NavLink } from "react-router-dom";
const ProtoLogin = () => {


  
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="protoLogin">
      <div className="container-fluid">
        <div className="row">
          <div className="left col-md-6 d-none d-md-block  bg-success p-5">
            <h1 className="authLogo text-white">JOBS</h1>
            <p className="welcomeText">Welcome Back</p>
          </div>
          <div className="right col-md-6 d-flex justify-content-center align-items-center">
            <div className="form">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control ps-4 py-2 rounded-5"
                    id="email"
                    placeholder="Email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control ps-4 py-2 rounded-5 "
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <p className="text-success">Forgot Password?</p>
                </div>
                <button
                  type="submit"
                  className="btn btn-success rounded-5  w-100"
                >
                  Sign In
                </button>
              </form>
              <p className="form-check mt-3">
                Dont Have Account?
                <NavLink
                  to="/register-emp"
                  className="text-success ms-1 text-decoration-none  fw-bold"
                >
                  Sign Up
                </NavLink>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtoLogin;
