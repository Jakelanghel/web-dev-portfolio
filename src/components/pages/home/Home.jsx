import React, { useState, useEffect } from "react";
import { StyledHome } from "./Home.Styled";
import { AnimatePresence, motion } from "framer-motion";
import { Context } from "../../../Context";
import { codeBlockVariants } from "./variants/CodeBlockVariants";
import { homeContentVariants } from "./variants/HomeContentVariants";
import CodeBlockAnimated from "./code-block/code-block-animated/CodeBlockAnimated";
import About from "./about/About";
import Skills from "./skills/Skills";
import Hero from "./hero/Hero";

const Home = () => {
  const { setShowFooter } = React.useContext(Context);
  const [codeBlockVisible, setCodeBlockVisible] = useState(true);
  const [homeElementsVisible, setHomeElementsVisible] = useState(false);

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
            variants={codeBlockVariants}
            initial="visible"
            animate="hidden"
            exit="exit"
            onAnimationComplete={handleCodeBlockExit}
          >
            <CodeBlockAnimated />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {homeElementsVisible ? (
          <motion.div
            key="homeContent"
            variants={homeContentVariants}
            initial="hidden"
            animate="visible"
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
