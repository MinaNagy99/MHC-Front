import React from "react";
import AboutMHC from "../../components/whoWeAre/AboutMHC/AboutMHC";
import Management from "../../components/whoWeAre/Management/Management";
import FirstSection from "../../components/whoWeAre/firstSection/FirstSection";
import OurValues from "../../components/whoWeAre/OurValues/OurValues";
import Holdings from "../../components/whoWeAre/Holdings/Holdings";

function WhoWeAre() {
  return (
    <>
      <FirstSection />
      <br />
      <br />
      <div className="px-8">
        <AboutMHC />
        <br />
        <br />
        <Management />
        <br />
        <OurValues />
      <Holdings />
      </div>
    </>
  );
}

export default WhoWeAre;
