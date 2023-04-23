import React from "react";
import { StyledHeader } from "./Header.Styled";
import { Context } from "../../Context";

const Header = (props) => {
  const { setNavIsOpen, navIsOpen } = React.useContext(Context);

  const handleClick = () => {
    setNavIsOpen((oldState) => !oldState);
  };
  return (
    <StyledHeader>
      <div className="container-logo">
        <p className="logo">&#60;JtL&#62;</p>
      </div>

      <div
        className={navIsOpen ? `nav-toggle nav-open` : `nav-toggle`}
        onClick={handleClick}
      >
        <span className="hamburger"></span>
      </div>
    </StyledHeader>
  );
};

export default Header;
