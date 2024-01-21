import React from "react";

import "../../ProtoStyles/Proto-OurComp.css";
const OurCompanies = () => {
  return (
    <div className="ourCompaines pb-5">
      <h3 className="text-center mb-5 text-success ">Our Companies</h3>
      <div className="compainesLogo py-5 bg-success">
        <div className="container">
          <div className="row ">
            <div className="col-lg-2 col-md-3 col-sm-4 col-12   mb-3 mb-lg-0">
              <div className="colHeight">
                <img src="/Images/qteck.bmp" alt="error" />
              </div>

              {/* <h1 className="bg-info">hhh hhhh</h1> */}
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4  mb-3 mb-lg-0 ">
              <div className="colHeight">
                <img src="/Images/Algoriza.png" alt="error" />
                {/* <h1 className="bg-info">hhh hhhh</h1> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4  mb-3 mb-lg-0">
              <div className="colHeight">
                <img src="/Images/awamer_alshabaka.png" alt="error" />
                {/* <h1 className="bg-info">hhh hhhh</h1> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4  mb-3 mb-lg-0 ">
              <div className="colHeight">
                <img src="/Images/Socialmedia.png" alt="error" />
                {/* <h1 className="bg-info">hhh hhhh</h1> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4  mb-3 mb-lg-0">
              <div className="colHeight">
                <img src="/Images/Famous_Logos2.jpg" alt="error" />
                {/* <h1 className="bg-info">hhh hhhh</h1> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4  mb-3 mb-lg-0 ">
              <div className="colHeight">
                <img src="/Images/RoQaY.jpg" alt="error" />
                {/* <h1 className="bg-info">hhh hhhh</h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompanies;
