import React from "react";
import SecondSection from "../../components/HomePage/secondSection/secondSection";
import FirstSection from "../../components/HomePage/firstSection/firstSection";
import SignatureProject from "../../components/HomePage/signatureProject/signatureProject";

function HomePage() {
  return (
    <>
      <FirstSection />
        <SecondSection />
      <div className="md:p-10 p-5">
        <SignatureProject />
      </div>
    </>
  );
}

export default HomePage;
