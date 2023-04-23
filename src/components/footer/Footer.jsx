import React from "react";
import { StyledFooter } from "./Footer.Styled";
import { images } from "../../constants/images";
import { Context } from "../../Context";

const Footer = () => {
  const { theme } = React.useContext(Context);

  return (
    <StyledFooter filter={theme.main.accentFilter}>
      <div className="container-footer-link">
        <a href={"#"}>
          <img src={images.githubIcon} alt="" />
        </a>
      </div>

      <div className="container-footer-link">
        <a href={"#"}>
          <img src={images.fMentorLogo} alt="" />
        </a>
      </div>

      <div className="container-footer-link">
        <a href={"#"}>
          <img src={images.linkedinIcon} alt="" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
