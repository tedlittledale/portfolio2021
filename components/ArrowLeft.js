import React from "react";

const ArrowLeft = ({ bg = "#EDC92C", arrow = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="40px"
      height="40px"
    >
      <path
        fill={bg}
        d="M10 24L25.5 4 38 4 22.7 24 22.7 24 22.7 24 38 44 25.5 44z"
      />
    </svg>
  );
};

export default ArrowLeft;
