import React from 'react';
import { useNavigate, useRouteError } from "react-router-dom";

import "../ProtoStyles/Proto-error.css";

const ProtoError = () => {

    const error = useRouteError();
    let navigate = useNavigate();
  
    // function backHandeler() {
    // // This Case To Return The previous Page From Any Page
  
    //   navigate(-1, { replace: true });
    // }
  
    function backHandeler() {
      // This Case To Return The Home Page From Any Page
      navigate("/", { replace: true });
    }

    return (
        <div className="errPar">
        <div className="wrapper">
          <div className="box">
            <h1>404</h1>
            <p className="errorTex">
              Woops! Something went wrong :
              <br />
              <span className=" " > {error.statusText || error.message}</span>
            </p>
            <p>
              {/* <a href="/">Let me try again!</a> */}
              <button className="btn btn-primary fs-3" onClick={backHandeler}>
                Let me try again!
              </button>
            </p>
          </div>
        </div>
      </div>
    );
};

export default ProtoError;