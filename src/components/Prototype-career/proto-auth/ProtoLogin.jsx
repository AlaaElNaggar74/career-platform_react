import React, { useEffect, useState } from "react";
import "../ProtoStyles/Proto-Auth/Auth-Login.css";
import { NavLink, useNavigate } from "react-router-dom";
const ProtoLogin = () => {
  let navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailErro, setEmailErro] = useState(false);
  let [passwordErro, setPasswordErro] = useState(false);

  let formSubmitHandler = async () => {
    await fetch(`http://localhost:5000/users?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          console.log("No Email Exisit . . . ");
          setEmailErro(true);
          setTimeout(() => {
            setEmailErro(false);
          }, 1000);
       } else {
          console.log(data);
          console.log("password", typeof password);
          let oldPassword = data[0].password;
          console.log("oldPassword", typeof oldPassword);
          if (oldPassword === password) {
            navigate("/", { replace: true });
          } else {
            setPasswordErro(true);
            setTimeout(() => {
              setPasswordErro(false);
            }, 1000);
        }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  function inputChangeHandler(event) {
    if (event.id === "email") {
      setEmail(event.value);
    } else if (event.id === "password") {
      setPassword(event.value);
    }
  }
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
                  formSubmitHandler();
                }}
              >
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
                      Email Not correct
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
                  {passwordErro && (
                    <p className="text-danger ms-4" id="passwordErro">
                      Password Not Correct
                    </p>
                  )}
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
