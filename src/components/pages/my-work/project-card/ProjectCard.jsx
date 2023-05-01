import React, { useState } from "react";
import { StyledProjectCard } from "./ProjectCard.Styled";
import { images } from "../../../../constants/images";
import MoreInfo from "./more-info/MoreInfo";

const ProjectCard = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((oldState) => !oldState);
  };

  return (
    <StyledProjectCard className={showMore ? "more-info-open" : ""}>
      <a href={props.liveSite} className="project-link">
        <img src={props.img} alt={props.name} className="project-img" />
      </a>

      <h2>{props.name}</h2>
      <div className="container-tech">
        <p className="tech-name">{props.tech}</p>
        <button className="more-info-btn" onClick={toggleShowMore}>
          {showMore ? "Show Less" : "More Info"}
          <img
            className={showMore ? "arrow-close" : "arrow-open"}
            src={images.caretDown}
            alt=""
          />
        </button>
        {showMore ? <MoreInfo /> : null}
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
