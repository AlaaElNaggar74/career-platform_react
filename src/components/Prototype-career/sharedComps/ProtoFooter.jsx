import React from "react";
import "../ProtoStyles/Proto-footer.css";
const ProtoFooter = () => {
  return (
    <div className="footer bg-success py-5 text-white">
      <div className="container">
        <div className="row  ">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <p className="LogoJob fs-1" >JOBS</p>
            {/* <div className="footImag">
              <img src="" alt="" />
            </div> */}
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h5>Quick Links</h5>
            <p className="mb-0">About</p>
            <p className="mb-0">Compaines</p>
            <p className="mb-0">Help</p>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="footbox">
              <p className="mb-0">Jobs In Egypt</p>
              <p className="mb-0">Jobs In Saudi Arabia</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-lg-0">
            <h5>Follow Us</h5>
            <div className="icons my-2">
              <i class="fa-brands fa-facebook fs-4 text-white "></i>
              <i class="fa-brands fa-instagram mx-3 fs-4 text-white "></i>
              <i class="fa-brands fa-twitter fs-4 text-white "></i>
            </div>
            <p>Copyright &copy; 2023,Jobs</p>
          </div>
        </div>
        <div
          className="line"
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "white",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProtoFooter;
