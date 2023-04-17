import React from "react";
import { StyledHome } from "./Home.Styled";
import {motion} from "framer-motion"
import CodeBlock from "./hero/code-block/CodeBlock";
import Button from "./hero/button/HeroBtn";

const Home = () => {
  return (
    <StyledHome className="pg-pd">

      <div className="container-hero">
        <CodeBlock />
        <Button />
      </div>

      <div className="container-about">
      <div className="container-about-copy">
        <motion.h2
          initial={{ y: -2000 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          animate={{ y: 0 }}
        >
          Hi I'm Jake!
        </motion.h2>
        <motion.p
          initial={{ x: -2000 }}
          transition={{ ease: "easeIn", duration: 0.75 }}
          animate={{ x: 0, delay: 1 }}
          className="about-body"
        >
          I'm a Front-End Developer who's passionate about building beautiful,
          engaging, responsive websites.
        </motion.p>

        <motion.p
          initial={{ x: -2000 }}
          transition={{ ease: "easeIn", duration: 1 }}
          animate={{ x: 0 }}
          className="about-body"
        >
          I love building things for the web! Whether it be using the latest
          frameworks and libraries or starting from scratch with vanilla JS and
          custom CSS properties.
        </motion.p>

        <motion.p
          initial={{ x: -2000 }}
          transition={{ ease: "easeIn", duration: 1.25 }}
          animate={{ x: 0 }}
          className="about-body"
        >
          Highly motivated, quick learner with eagerness to learn the whole
          front end spectrum.
        </motion.p>

        
      </div>
      </div>
      
    </StyledHome>
  );
};

export default Home;
