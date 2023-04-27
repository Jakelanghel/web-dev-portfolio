import React from "react";
import { StyledProjectCard } from "./ProjectCard.Styled";
import { images } from "../../../../constants/images";

const ProjectCard = (props) => {
  return (
    <StyledProjectCard>
      <a href={props.liveSite} className="project-link">
        <img src={props.img} alt={props.name} className="project-img" />
      </a>

      <h2>{props.name}</h2>
      <div className="container-tech">
        <p className="tech-name">{props.tech}</p>
        <button className="more-info-btn">
          More Info
          <img className="drop-down-arrow" src={images.caretDown} alt="" />
        </button>
      </div>

      <div className="container-links">
        <a className="site-link" href={props.liveSite}>
          Live Site
        </a>
        <a className="repo-link" href={props.repoLink}>
          Repo
        </a>
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
