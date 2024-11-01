import React from "react";
import {
  floral_line1,
  floral_line2,
  floral_line3,
  floral_line4,
} from "../assets/assets";

const EndingDesign = ({ backgroundImgIndex = 0 }) => {
  const floralLines = [floral_line1, floral_line2, floral_line3, floral_line4];
  const backgroundImg = floralLines[backgroundImgIndex] || floral_line1; // Default to first if out of range

  return (
    <div
      className="relative flex items-center justify-center h-20 bg-center bg-cover bg-opacity-30"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    ></div>
  );
};

export default EndingDesign;
