import React from "react";
// import Cust_Job_Country from "../../sharedComps/customCom/Cust_Job_Country";
import CustCountry from "./CustCountry";
// import egypt from "{./Images/egypt.jpg}";

const JobsCountry = () => {
  return (
    <div className="jobsCountry pb-5">
      <h3 className="text-center mb-5 text-success ">Find Jobs By Country</h3>
      <div className="country  ">
        <div className="container">
          <div className="row">
            <CustCountry
              name="Egypt"
              jobs="1000"
              urlImageBox="egypt.jpg"
            />

            <CustCountry
              name="Saudi Arabia"
              jobs="2000"
              urlImageBox="SaudiArabia.jpg"
            />

            <CustCountry
              name="Qatar"
              jobs="1000"
              urlImageBox="Qatar.jpg"
            />
            <CustCountry
              name="Kuwait"
              jobs="1000"
              urlImageBox="Kuwait.jpg"
            />
            <CustCountry
              name="Oman"
              jobs="2000"
              urlImageBox="Oman.jpg"
            />
            <CustCountry
              name="Bahrain"
              jobs="1000"
              urlImageBox="Bahrain.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCountry;
