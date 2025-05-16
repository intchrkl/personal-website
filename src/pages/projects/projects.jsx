import React from "react";
import "./projects.css";
import projectData from "../../data/projects.json";

function Projects() {

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="project-list">
        {projectData.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <p>
              <strong>Technologies:</strong> {proj.tech.join(", ")}
            </p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              {proj.linkText}→
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
