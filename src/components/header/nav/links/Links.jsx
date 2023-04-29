import React from "react";
import { StyledLinks } from "./Links.Styled";
import { images } from "../../../../constants/images";

const Links = () => {
  return (
    <StyledLinks>
      <div className="container-img">
        <img src={images.fMentorLogo} alt="" className="link-icon" />
      </div>
      <div className="container-img">
        <img src={images.githubBrands} alt="" className="link-icon" />
      </div>
    </StyledLinks>
  );
};

export default Links;
