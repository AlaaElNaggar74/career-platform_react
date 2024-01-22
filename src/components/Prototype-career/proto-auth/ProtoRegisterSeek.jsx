import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../ProtoStyles/Proto-Auth/Auth-Rigister-Seek.css";

const ProtoRegisterSeek = () => {
  let navigate = useNavigate();

  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [jobTitle, setJobTitle] = useState("");
  let [checkIinput, setCheckIinput] = useState(false);

  let [emailErro, setEmailErro] = useState(false);

  let formSubmitHandler = async () => {
    let formData = {
      fname,
      lname,
      email,
      password,
      companyName: null,
      companyLocation: null,
      companySize: null,
      jobTitle,
      checkIinput,
      role: "seeker",
    };
    await fetch(`http://localhost:5000/users?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => navigate("/login", { replace: true }))
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          console.log(data);
          setEmailErro(true);
          setTimeout(() => {
            document.getElementById("emailerrorId").style.display = "none";
            setEmailErro(false);
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  function inputChangeHandler(event) {
    if (event.id === "fname") {
      setFname(event.value);
    } else if (event.id === "lname") {
      setLname(event.value);
    } else if (event.id === "email") {
      setEmail(event.value);
    } else if (event.id === "password") {
      setPassword(event.value);
    } else if (event.id === "jobTitle") {
      setJobTitle(event.value);
    } else if (event.id === "checkIinput") {
      setCheckIinput(event.checked);
    }
  }

  useEffect(() => {
    document.title = "Seeker-Register";
  }, []);

  return (
    <div className="protoRegist_Seek">
      <div className="container-fluid">
        <div className="row">
          <div className="left col-md-5 d-none d-md-block  bg-success p-5">
            <h1 className="authLogo text-white">JOBS</h1>
            <div className="welcomeText">
              <p className="mainTex">Create an Account To Find Jobs Faster</p>
              <h5 className="alterLink">
                Employer?
                <NavLink
                  to="/register-emp"
                  className="text-white fw-normal text-decoration-none  ms-2 "
                >
                  Sign Up As Employer
                </NavLink>
              </h5>
            </div>
          </div>
          <div className="right col-md-7 d-flex justify-content-center align-items-center">
            <div className="form">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  formSubmitHandler();
                }}
              >
                <div className="mb-3">
                  <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        required
                        type="text"
                        id="fname"
                        value={fname}
                        onChange={(event) => {
                          setFname(event.target.value);
                        }}
                        className="form-control rounded-5 ps-4"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        required
                        type="text"
                        id="lname"
                        value={lname}
                        onChange={(event) => {
                          setLname(event.target.value);
                        }}
                        className="form-control rounded-5 ps-4"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    required
                    type="email"
                    className="form-control ps-4 py-2 rounded-5"
                    id="email"
                    value={email}
                    onChange={(event) => inputChangeHandler(event.target)}
                    placeholder="Work Email"
                    aria-describedby="emailHelp"
                  />
                  {emailErro && (
                    <p className="text-danger ms-4" id="emailerrorId">
                      Email should be unique
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(event) => inputChangeHandler(event.target)}
                    className="form-control ps-4 py-2 rounded-5 "
                    placeholder="Password"
                    id="password"
                  />
                </div>

                <div className="mb-3">
                  <input
                    required
                    type="text"
                    className="form-control ps-4 py-2 rounded-5"
                    value={jobTitle}
                    id="jobTitle"
                    placeholder="What Job TitLes Are You Looking For?"
                    onChange={(event) => inputChangeHandler(event.target)}
                    aria-describedby="jobTitlelHelp"
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(event) => inputChangeHandler(event.target)}
                    id="checkIinput"
                  />
                  <label className="form-check-label" htmlFor="checkIinput">
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
              <p className="form-check d-md-none">
                Employer?
                <NavLink
                  to="/register-emp"
                  className="text-decoration-none  ms-2  text-success fw-bold"
                >
                  Sign Up As Employer
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtoRegisterSeek;
