import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../ProtoStyles/Proto-Auth/Auth-Rigister-Emp.css";

const ProtoRegisterEmp = () => {
  useEffect(() => {
    document.title = "Emp-Register";
  }, []);

  return (
    <div className="protoRegist_Emp">
      <div className="container-fluid">
        <div className="row">
          <div className="left col-md-5 d-none d-md-block  bg-success p-5">
            <h1 className="authLogo text-white">JOBS</h1>
            <div className="welcomeText">
              <p className="mainTex">
                Create a Company Account To Start Hiring Now
              </p>
              <h5 className="alterLink">
                Looking For A Job?
                <NavLink
                  to="/register-seeker"
                  className="text-white fw-normal  text-decoration-none  ms-2 "
                >
                  Sign Up As Seeker
                </NavLink>
              </h5>
            </div>
          </div>
          <div className="right col-md-7 d-flex justify-content-center align-items-center">
            <div className="form">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div className="mb-3">
                  <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        id="Fname"
                        className="form-control rounded-5 ps-4"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        id="Lname"
                        className="form-control rounded-5 ps-4"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control ps-4 py-2 rounded-5"
                    id="email"
                    placeholder="Work Email"
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
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control ps-4 py-2 rounded-5"
                    id="companyName"
                    placeholder="Company Name"
                    aria-describedby="companyNamelHelp"
                  />
                </div>
                <div className="mb-3">
                  <select
                    class="form-select rounded-5 text-dark-50 "
                    aria-label="Default select example"
                  >
                    <option selected value="0" disabled>
                      Company Location
                    </option>
                    <option value="1">Cairo</option>
                    <option value="2">Giza</option>
                    <option value="3">Alex</option>
                    <option value="4">Tanta</option>
                    <option value="5">El Sharqia</option>
                  </select>
                </div>
                <div className="mb-3">
                  <select
                    class="form-select rounded-5 text-dark-50 "
                    aria-label="Default select example"
                  >
                    <option selected value="0" disabled>
                      Company Size
                    </option>
                    <option value="1">Large</option>
                    <option value="2">Meduim</option>
                    <option value="3">Small</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control ps-4 py-2 rounded-5"
                    id="hireRole"
                    placeholder="What Role You Are Hiring For?"
                    aria-describedby="hireRolelHelp"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    ihave read and agree with
                    <span className="text-success">Terms of Service </span> and
                    our <span className="text-success">Privacy Policy </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-success rounded-5  w-100"
                >
                  Sign In
                </button>
              </form>
              <p className="form-check mt-3">
                Have Account?
                <NavLink
                  to="/login"
                  className="text-success ms-1 text-decoration-none  fw-bold"
                >
                  Sign In
                </NavLink>
              </p>
              <p className="d-md-none form-check ">
                Looking For A Job?
                <NavLink
                  to="/register-seeker"
                  className="fw-normal  text-decoration-none  ms-2 text-success fw-bold "
                >
                  Sign Up As Seeker
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtoRegisterEmp;
