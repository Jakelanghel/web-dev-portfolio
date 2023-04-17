import React from "react";
import { StyledMobileMenu } from "./MobileNav.Styled";
import { NavLink } from "react-router-dom";
import { mobileNavVariants } from "../variants/mobileNavVariants";
import Links from "./links/Links";

const MobileMenu = (props) => {
  const { setNavIsOpen } = props;

  const handleClick = () => {
    setNavIsOpen(false);
  };

  return (
    <StyledMobileMenu
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

      <Links/>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
