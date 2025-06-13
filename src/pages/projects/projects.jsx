import React from "react";
import "./projects.css";
import projectData from "../../data/projects.json";
import { motion } from "framer-motion";
import { ProjectList } from "../../components/projects/ProjectList"

function Projects() {

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <ProjectList />
    </div>
  );
}

export default Projects;
