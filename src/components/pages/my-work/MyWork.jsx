import React, { useState } from "react";
import { StyledMyWork } from "./MyWork.Styled";
import { projectData } from "./projectData";
import ProjectCard from "./project-card/ProjectCard";

const MyWork = () => {
  const [active, setActive] = useState("all");

  const toggleActive = (e) => {
    const filter = e.target.textContent;
    setActive(filter);
  };

  const projectCats = ["all", "React", "Node", "Vanilla"];
  const ReactProjects = projectData.filter((proj) => proj.tech === "React");
  const vanillaProjects = projectData.filter(
    (proj) => proj.tech === "HTML, CSS, JS"
  );

  const filterBtns = projectCats.map((item) => {
    return (
      <button
        className={active === item ? "active filter-btn" : "filter-btn"}
        onClick={toggleActive}
        key={item}
      >
        {item}
      </button>
    );
  });

  const getProjCards = (current) => {
    const arr =
      current === "React"
        ? ReactProjects
        : current === "Vanilla"
        ? vanillaProjects
        : projectData;

    return arr.map((proj) => {
      return (
        <ProjectCard
          key={proj.name}
          img={proj.img}
          name={proj.name}
          tech={proj.tech}
          repo={proj.repo}
          liveSite={proj.liveSite}
        />
      );
    });
  };

  const cards = getProjCards(active);

  return (
    <StyledMyWork className="pg-pd">
      <div className="container-filter">{filterBtns}</div>

      <div className="container-projects">{cards}</div>
    </StyledMyWork>
  );
};

export default MyWork;
