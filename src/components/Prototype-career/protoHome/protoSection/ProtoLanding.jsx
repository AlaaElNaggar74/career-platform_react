import React from "react";
import "../../ProtoStyles/Proto-Landing.css";
const ProtoLanding = () => {
  return (
    <div className="container">
      <div className="protoLanging d-flex   justify-content-center  align-items-center ">
        <div className="landContainer w-100 ">
          <h3 className="text-center mb-5 text-success">
            Do What You Love To Love What You Do
          </h3>
          <div className="landInput col-8 m-auto pt-3">
            <div className="row">

              <div className="col-md-6 mb-md-0 mb-2 col-lg-7">
                <div className="input-group ">
                  <input
                    className="shadow  form-control border-end-0 border overflow-hidden rounded-4 py-2 fw-bold "
                    type="search"
                    placeholder="Search jobs, intenships, compaines"
                    id="search-job"
                  />
                  <span className="input-group-append">
                    <button
                      className="btn btn-outline-secondary bg-white border-start-0 rounded-4 border-bottom-0 border ms-n5 py-2"
                      type="button"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </div>

              <div className="col-md-6 mb-md-0 mb-2 col-lg-3">
                <div className="input-group ">
                  <input
                    className="shadow form-control border-end-0 border overflow-hidden rounded-4 py-2 fw-bold"
                    type="search"
                    placeholder="Location"
                    id="search-job"
                  />
                  <span className="input-group-append ">
                    <button
                      className="btn btn-outline-secondary bg-white border-start-0 rounded-4 border-bottom-0 border ms-n2 py-2"
                      type="button"
                    >
                      <i className="fa fa-location" />
                    </button>
                  </span>
                </div>
              </div>

              <div className="col-lg-2 col-12 mt-2 mt-lg-0 ">
                <button className="shadow btn btn-success w-100 rounded-4 py-2 ">
                  Search
                </button>
              </div>
              <div className="col-12 ps-4 pt-3 fw-semibold d-sm-flex align-items-sm-center ">
                <p className="text-success mb-sm-0 me-4 ">Popular Search</p>
                <div className="btt">
                  <button className="btn btn-success me-2 rounded-5 py-2 px-4">UI/UX</button>
                  <button className="btn btn-success rounded-5 py-2 px-4">HR</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtoLanding;
