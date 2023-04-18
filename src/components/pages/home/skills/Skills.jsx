import React from "react";
import { StyledSkills } from "./Skills.Styled";
import { images } from "../../../../constants/images";

const Skills = () => {
  return (
    <StyledSkills
    // initial={{ x: "-100vw", opacity: 0 }}
    // animate={{ x: 0, opacity: 1 }}
    // transition={{ delay: 7 }}
    >
      <h2>Skills</h2>
      <div className="container-flex ">
        <div className="container-skill">
          <h3>HTML5</h3>
          <img
            src={images.html5Icon}
            alt="html 5"
            className="skill-img filter-html-color"
          />
        </div>

        <div className="container-skill">
          <h3>CSS</h3>
          <img
            src={images.css3Icon}
            alt="css"
            className="skill-img filter-css-color"
          />
        </div>

        <div className="container-skill">
          <h3>Java Script</h3>
          <img
            src={images.jsIcon}
            alt="JavaScript"
            className="skill-img filter-js-color"
          />
        </div>

        <div className="container-skill">
          <h3>React</h3>
          <img
            src={images.reactIcon}
            alt="react"
            className="skill-img filter-react-color"
          />
        </div>

        <div className="container-skill">
          <h3>Sass</h3>
          <img
            src={images.sassIcon}
            alt="Sass"
            className="skill-img filter-sass-color"
          />
        </div>

        <div className="container-skill">
          <h3>Git</h3>
          <img
            src={images.gitIcon}
            alt="git"
            className="skill-img filter-git-color"
          />
        </div>

        <div className="container-skill">
          <h3>Api</h3>
          <img
            src={images.apiIcon}
            alt="api"
            className="skill-img filter-purple"
          />
        </div>

        <div className="container-skill">
          <h3>Node JS</h3>
          <img
            src={images.nodeIcon}
            alt="Node JS"
            className="skill-img filter-node-color"
          />
        </div>

        <div className="container-skill">
          <h3>Linux</h3>
          <img
            src={images.linuxIcon}
            alt="linux"
            className="skill-img filter-linux-color"
          />
        </div>

        <div className="container-skill">
          <h3>Windows</h3>
          <img
            src={images.windowsIcon}
            alt="linux"
            className="skill-img filter-white"
          />
        </div>
      </div>
    </StyledSkills>
  );
};

export default Skills;
