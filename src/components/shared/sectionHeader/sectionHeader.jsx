import React from "react";
import "./sectionHeader.css";

function SectionHeader({ firstWord, secondWord }) {
  return (
    <>
      <h2 className="text-large headerSection font-bold ">
        <span className="border-b-half">
          <span className=" ">{firstWord}</span>
          <span> {secondWord}</span>
        </span>
      </h2>
    </>
  );
}

export default SectionHeader;
