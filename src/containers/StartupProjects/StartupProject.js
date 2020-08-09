import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div>
          <div className="startup-projects-card">
            {bigProjects.projects.map(project => {
              return (
                <div className="pointer startup-project-image" onClick={() => openProjectInNewWindow(project.link)}>
                  <img alt="app icon" src={project.image}></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
