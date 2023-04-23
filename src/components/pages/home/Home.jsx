import React, { useState, useEffect } from "react";
import { StyledHome } from "./Home.Styled";
import CodeBlock from "./hero/code-block/code-block-animated/CodeBlockAnimated";
import About from "./about/About";
import Skills from "./skills/Skills";
import Hero from "./hero/Hero";

const Home2 = (props) => {
  const { isMobile, showElements } = props;

  return (
    <StyledHome className="pg-pd">
      {!showElements ? (
        <CodeBlock isMobile={isMobile} />
      ) : (
        <>
          <Hero isMobile={isMobile} />
          <About isMobile={isMobile} />
          <Skills isMobile={isMobile} />
        </>
      )}
    </StyledHome>
  );
};

export default Home2;
