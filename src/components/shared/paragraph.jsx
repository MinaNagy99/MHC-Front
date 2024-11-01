import React from "react";

function Paragraph({ p }) {
  return (
    <>
      <p className="mt-5 sm:text-small text-[12px] text-justify">{p}</p>
    </>
  );
}

export default Paragraph;
