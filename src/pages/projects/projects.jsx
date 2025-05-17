import React from "react";
import "./projects.css";
import projectData from "../../data/projects.json";
import { motion } from "framer-motion";

function Projects() {

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="project-list">
        {projectData.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <p>
              <strong>Technologies:</strong> {proj.tech.join(", ")}
            </p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              {proj.linkText}→
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
