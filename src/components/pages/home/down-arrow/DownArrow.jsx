import React from "react";
import { images } from "../../../../constants/images";
import { StyledDownArrow } from "./DownArrow.Styled";
const DownArrow = () => {
  return (
    <StyledDownArrow
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 7.5 }}
    >
      <img src={images.downArrow} alt="" className="arrow-img" />
    </StyledDownArrow>
  );
};

export default DownArrow;
