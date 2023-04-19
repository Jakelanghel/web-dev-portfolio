import React, { useState, useEffect } from "react";
import { StyledHome } from "./Home.Styled";
import CodeBlock from "./hero/code-block/CodeBlock";
import Button from "./hero/button/HeroBtn";
import About from "./about/About";
import Arrow from "./arrow/Arrow";
import Skills from "./skills/Skills";

const Home = (props) => {
  const [showElements, setShowElements] = useState(false);
  const { isMobile } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showElements ? (
        <StyledHome className="pg-pd">
          <div className="container-hero">
            <CodeBlock isMobile={isMobile} />
            <Button />
            {isMobile ? <Arrow className="bottom" /> : null}
          </div>
          <div className="container-about">
            <About isMobile={isMobile} />
          </div>

          <div className="container-skills">
            <Skills isMobile={isMobile} />
          </div>
        </StyledHome>
      ) : (
        <StyledHome className="pg-pd">
          <div className="container-hero">
            <CodeBlock isMobile={isMobile} />
            <Button />
            {isMobile ? <Arrow className="bottom" /> : null}
          </div>
        </StyledHome>
      )}
    </>
  );
};

export default Home;
