import React, { useState, useEffect } from "react";
import { StyledHome } from "./Home.Styled";
import { Context } from "../../../Context";
import { AnimatePresence, motion } from "framer-motion";
import CodeBlockAnimated from "./code-block/code-block-animated/CodeBlockAnimated";
import About from "./about/About";
import Skills from "./skills/Skills";
import Hero from "./hero/Hero";

const Home = () => {
  const { setShowFooter, setShowElements } = React.useContext(Context);
  const [codeBlockVisible, setCodeBlockVisible] = useState(true);
  const [HomeElementsVisible, setHomeElementsVisible] = useState(false);

  const handleCodeBlockExit = () => {
    setCodeBlockVisible(false);
    setHomeElementsVisible(true);
    setShowFooter(true);
  };
  return (
    <StyledHome className="home-page">
      <AnimatePresence mode="wait">
        {codeBlockVisible ? (
          <motion.div
            key="codeBlock"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, transition: { duration: 8 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            onAnimationComplete={handleCodeBlockExit}
          >
            <CodeBlockAnimated />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {HomeElementsVisible ? (
          <motion.div
            key="homeContent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 2 } }}
            className="home-content"
          >
            <div className="container">
              <Hero />
              <About />
            </div>

            <Skills />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </StyledHome>
  );
};

export default Home;
