import React from "react";
import { StyledHeader } from "./Header.Styled";
import { Context } from "../../Context";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav/Nav";

const Header = () => {
  const { setNavIsOpen, navIsOpen, isDesktop } = React.useContext(Context);

  const handleClick = () => {
    setNavIsOpen((oldState) => !oldState);
  };
  return (
    <StyledHeader>
      <div className="container-logo">
        <p className="logo">&#60;JtL&#62;</p>
      </div>

      {!isDesktop ? (
        <div
          className={navIsOpen ? `nav-toggle nav-open` : `nav-toggle`}
          onClick={handleClick}
        >
          <span className="hamburger"></span>
        </div>
      ) : null}

      <AnimatePresence>
        {navIsOpen ? <Nav /> : isDesktop ? <Nav /> : null}
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;
