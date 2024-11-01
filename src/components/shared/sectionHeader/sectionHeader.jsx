import React from "react";
import "./sectionHeader.css";

function SectionHeader({ firstWord, secondWord, type = "horizontal" }) {
  return (
    <>
      <h2 className="text-large headerSection font-bold ">
        {type == "horizontal" ? (
          <>
            <span className="border-b-half">
              <span className=" ">{firstWord}</span>
              <span> {secondWord}</span>
            </span>
          </>
        ) : (
          <>
            <span className="border-b-half sm:text-large text-[20px] font-semibold tracking-wider">
              <p className="my-0 leading-">{firstWord}</p>
              <p className="leading-3 my-0">{secondWord}</p>
            </span>
          </>
        )}
      </h2>
    </>
  );
}

export default SectionHeader;
