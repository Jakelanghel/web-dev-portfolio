import React from "react";
import { StyledHeader } from "./Header.Styled";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container-logo">
        <p className="logo">&#60;JtL&#62;</p>
      </div>

      <span className="hamburger"></span>
    </StyledHeader>
  );
};

export default Header;
