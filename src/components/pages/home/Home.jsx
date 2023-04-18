import React, { useState, useEffect } from "react";
import { StyledHome } from "./Home.Styled";
import CodeBlock from "./hero/code-block/CodeBlock";
import Button from "./hero/button/HeroBtn";
import About from "./about/About";
import DownArrow from "./down-arrow/DownArrow";
import Skills from "./skills/Skills";

const Home = (props) => {
  const [showElements, setShowElements] = useState(false);

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
            <CodeBlock isMobile={props.isMobile} />
            <Button />
            {props.isMobile ? <DownArrow className="bottom" /> : null}
          </div>
          <div className="container-about">
            <About />
          </div>

          <div className="container-skills">
            <Skills isMobile={props.isMobile} />
          </div>
        </StyledHome>
      ) : (
        <StyledHome className="pg-pd">
          <div className="container-hero">
            <CodeBlock isMobile={props.isMobile} />
            <Button />
            {props.isMobile ? <DownArrow className="bottom" /> : null}
          </div>
        </StyledHome>
      )}
    </>
  );
};

export default Home;
