import React from "react";
import { StyledHero } from "./Hero.styled";

import CodeBlock from "./code-block/code-block-static/CodeBlockStatic";
import Arrow from "./arrow/Arrow";

const Hero = (props) => {
  const { isMobile } = props;
  return (
    <StyledHero>
      <CodeBlock isMobile={isMobile} />
      <button>My Work</button>
      {isMobile ? <Arrow className="bottom" isMobile={isMobile} /> : null}
    </StyledHero>
  );
};

export default Hero;
