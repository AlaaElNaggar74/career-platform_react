import React from "react";

const Cust_Job_Country = ({ name, jobs }) => {
  return (
    <div className="CustJobCountry d-flex justify-content-center align-items-center">
      <div className="box">
        <h4 className="mb-3">{name}</h4>
        <p>{jobs}</p>
      </div>
    </div>
  );
};

export default Cust_Job_Country;
