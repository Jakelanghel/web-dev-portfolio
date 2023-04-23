import React from "react";
import { StyledHome } from "./Home.Styled";
import { Context } from "../../../Context";
import CodeBlock from "./hero/code-block/code-block-animated/CodeBlockAnimated";
import About from "./about/About";
import Skills from "./skills/Skills";
import Hero from "./hero/Hero";

const Home2 = () => {
  const { isMobile, showElements } = React.useContext(Context);

  return (
    <StyledHome className="pg-pd">
      {!showElements ? (
        <CodeBlock />
      ) : (
        <>
          <Hero isMobile={isMobile} />
          <About />
          <Skills />
        </>
      )}
    </StyledHome>
  );
};

export default Home2;
