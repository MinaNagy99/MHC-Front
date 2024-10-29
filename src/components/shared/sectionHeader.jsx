import React from "react";

function SectionHeader({ firstWord, secondWord }) {
  return (
    <>
      <h2 className="text-large font-bold">
        <span className=" border-b-4 border-mainGold ">{firstWord}</span>
        <span> {secondWord}</span>
      </h2>
    </>
  );
}

export default SectionHeader;
