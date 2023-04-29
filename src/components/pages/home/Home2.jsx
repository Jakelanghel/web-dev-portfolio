import React from "react";
import { StyledHome } from "./Home.Styled";
import CodeBlockStatic from "./code-block/code-block-static/CodeBlockStatic";
import CodeBlockAnimated from "./code-block/code-block-animated/CodeBlockAnimated";
import About from "./about/About";
import Arrow from "./arrow/Arrow";

const Home2 = () => {
  return (
    <StyledHome>
      <div className="container-home">
        <CodeBlockStatic />
        <About />
      </div>
      <Arrow />
    </StyledHome>
  );
};

export default Home2;
