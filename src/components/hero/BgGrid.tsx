import Image from "next/image";
import React from "react";

import gridSvg from "../../app/assets/bg-grid.svg";

const BgGrid = () => {
  return (
    <Image
      alt="bg"
      src={gridSvg}
      width={2000}
      height={2500}
      className="background-container"
    />
  );
};

export default BgGrid;
