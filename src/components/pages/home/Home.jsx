import React from "react";
import { StyledHome } from "./Home.Styled";

import CodeBlock from "./hero/code-block/CodeBlock";
import Button from "./hero/button/HeroBtn";

const Home = () => {
  return (
    <StyledHome>
      <div className="container-hero">
        <CodeBlock />
        <Button />
      </div>
    </StyledHome>
  );
};

export default Home;
