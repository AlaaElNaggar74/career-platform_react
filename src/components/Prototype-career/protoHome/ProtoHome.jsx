import React from "react";
import ProtoLanding from "./protoSection/ProtoLanding";
import OurCompanies from "./protoSection/OurCompanies";
import RecruitmentCompanies from "./protoSection/RecruitmentCompanies";
import JobsCountry from "./protoSection/JobsCountry";

const ProtoHome = () => {
  return (
    <div className="protoHome">
      <ProtoLanding />
      <OurCompanies />
      <RecruitmentCompanies />
      <JobsCountry />
    </div>
  );
};

export default ProtoHome;
