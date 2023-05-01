import React from "react";
import { StyledHero } from "./Hero.styled";
import { NavLink } from "react-router-dom";

import CodeBlockStatic from "../code-block/code-block-static/CodeBlockStatic";
import Arrow from "./arrow/Arrow";

const Hero = () => {
  return (
    <StyledHero className="hero-section">
      <div className="container-code">
        <CodeBlockStatic className="static" />
      </div>
      <NavLink to="/my-work" className="my-work-btn">
        My Work
      </NavLink>

      <Arrow />
    </StyledHero>
  );
};

export default Hero;
