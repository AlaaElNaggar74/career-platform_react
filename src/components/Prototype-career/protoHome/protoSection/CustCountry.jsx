import React from "react";
import "../../ProtoStyles/Proto-jobCountry.css";


const CustCountry = ({ name, jobs, urlImageBox }) => {
  return (
    <div className="col-lg-4 col-md-6 col-10 m-auto  mb-4 ">
      <div
        className="CustCountry py-3 d-flex justify-content-center a align-items-center   "
        style={{
          backgroundImage: "url(/Images/" + urlImageBox + ")",
          
        }}
      >
        <div className="layer">

        </div>
        <div className="box text-center  p-0">
          <h3 className="mb-3">{name}</h3>
          <p className="m-0">{jobs} Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default CustCountry;
