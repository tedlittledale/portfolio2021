import React from "react";

const ArrowRight = ({ bg = "#EDC92C", arrow = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="40px"
      height="40px"
    >
      <path
        fill={bg}
        d="M38 24L22.5 4 10 4 25.3 24 25.3 24 25.3 24 10 44 22.5 44z"
      />
    </svg>
  );
};

export default ArrowRight;
