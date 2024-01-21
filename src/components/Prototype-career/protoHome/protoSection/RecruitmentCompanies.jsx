import React from "react";
import "../../ProtoStyles/Proto-Recruitment.css";

const RecruitmentCompanies = () => {
  return (
    <div className="recruitComp pb-5">
      <h3 className="text-center mb-5 text-success ">
        Avtive Recruitment Compaines
      </h3>
      <div className="Images py-5 bg-success">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4 col-md-6 col-7 m-auto  mb-3 mb-lg-0 ">
              <div className=" d-sm-flex justify-content-sm-center jus align-items-sm-center bg-white px-2 py-4 rounded-5">
                <div className="colHeight  mx-auto mx-sm-0 mb-2 mb-sm-0">
                  <div className="dotted">
                    <img src="/Images/qtech-logo-1.png" alt="error" />
                  </div>
                </div>
                <div className="text ps-3 text-center text-sm-start ">
                  <h4>AlQemam - QTech</h4>
                  <p className="fw-bold text-black-50">3 Jobs</p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-7 m-auto  mb-3 mb-lg-0 ">
              <div className=" d-sm-flex justify-content-sm-center jus align-items-sm-center bg-white px-2 py-4 rounded-5">
                <div className="colHeight  mx-auto mx-sm-0 mb-2 mb-sm-0">
                  <div className="dotted">
                    <img src="/Images/qtech-logo-1.png" alt="error" />
                  </div>{" "}
                </div>
                <div className="text ps-3 text-center text-sm-start ">
                  <h4>AlQemam - QTech</h4>
                  <p className="fw-bold text-black-50">3 Jobs</p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-7 m-auto  mb-3 mb-lg-0 ">
              <div className=" d-sm-flex justify-content-sm-center align-items-sm-center bg-white px-2 py-4 rounded-5">
                <div className="colHeight mx-auto mx-sm-0 mb-2 mb-sm-0">
                  <div className="dotted">
                    <img src="/Images/qtech-logo-1.png" alt="error" />
                  </div>
                </div>
                <div className="ps-3 text-center text-sm-start">
                  <h4>AlQemam - QTech</h4>
                  <p className="fw-bold text-black-50 ">3 Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCompanies;
