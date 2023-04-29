import React from "react";
import { StyledNav } from "./Nav.Styled";
import { NavLink } from "react-router-dom";
import { mobileNavVariants } from "./variants/mobileNavVariants";
import { Context } from "../../../Context";
import Links from "./links/Links";

const MobileNav = () => {
  const { setNavIsOpen, isDesktop } = React.useContext(Context);

  const handleClick = () => {
    setNavIsOpen(false);
  };

  return (
    <StyledNav
      initial="closed"
      animate="open"
      exit="closed"
      variants={mobileNavVariants}
    >
      <NavLink
        to="/"
        className="nav-link"
        activeclassname="active"
        onClick={handleClick}
      >
        <span>//</span>
        Home
      </NavLink>
      <NavLink
        to="/my-work"
        className="nav-link"
        activeclassname="active"
        onClick={handleClick}
      >
        <span>//</span>
        My Work
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-link"
        activeclassname="active"
        onClick={handleClick}
      >
        <span>//</span>
        Contact
      </NavLink>

      {!isDesktop ? <Links /> : null}
    </StyledNav>
  );
};

export default MobileNav;
