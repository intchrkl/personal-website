import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectGallery.css";
import projectData from "../../data/projects.json";

export function ProjectGallery() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="project-gallery-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map((proj, idx) => (
          <motion.div
            className="project-tile"
            key={idx}
            layoutId={`card-${idx}`}
            onClick={() => setActiveProject({ ...proj, id: idx })}
            whileHover={{ scale: 1.03 }}
            // transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description.slice(0, 60)}...</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="project-modal"
            layoutId={`card-${activeProject.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              <p><strong>Tech:</strong> {activeProject.tech.join(", ")}</p>
              {activeProject.link && (
                <a href={activeProject.link} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
