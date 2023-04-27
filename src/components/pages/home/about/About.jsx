import React from "react";
import { StyledAbout } from "./About.Styled";

const About = () => {
  return (
    <StyledAbout className="about-section">
      <h2>Hi I'm Jake!</h2>
      <p className="about-body">
        I'm a Front-End Developer who's passionate about building beautiful,
        engaging, responsive websites.
      </p>

      <p className="about-body">
        I love building things for the web! Whether it be using the latest
        frameworks and libraries or starting from scratch with vanilla JS and
        custom CSS properties.
      </p>

      <p className="about-body">
        Highly motivated, quick learner with eagerness to learn the whole front
        end spectrum.
      </p>
    </StyledAbout>
  );
};

export default About;
