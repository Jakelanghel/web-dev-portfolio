import React from "react";
import { StyledHero } from "./Hero.styled";

import CodeBlockStatic from "../code-block/code-block-static/CodeBlockStatic";
import Arrow from "./arrow/Arrow";

const Hero = () => {
  return (
    <StyledHero className="hero-section">
      <div className="container-code">
        <CodeBlockStatic className="static" />
      </div>
      <button>My Work</button>
      <Arrow />
    </StyledHero>
  );
};

export default Hero;
