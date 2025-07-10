import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
import { motion, AnimatePresence } from "framer-motion"
import projectData from "../../data/projects.json";
import { RepoLanguages } from "../../components/github/RepoLanguages"
import { useState, useEffect, useRef } from "react";
import { Banner } from "../../components/banner/Banner";
import { ScrollIndicator } from "../../components/scroll/scroll"
import { Navbar } from "../../components/navbar/Navbar";
import { ProjectGallery } from "../../components/projectGallery/ProjectGallery";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";


function Home() {
  return (
    <>
      <Navbar />
      <BannerSection />
      <ExperienceSection />
      {/* <ProjectsSection /> */}
    </>
  );
}

function ProjectsSection() {
  const placeholderProjects = Array.from({ length: 5 });

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-carousel">
        {placeholderProjects.map((_, index) => (
          <div key={index} className="project-card">
            <div className="card-placeholder">Project {index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


const experiences = [
  {
    company: "Accenture",
    title: "Intern",
    duration: "May 2025 - Aug 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam. Fringilla quam urna.",
  },
  {
    company: "Coda Payments",
    title: "SWE Intern",
    duration: "May 2024 - Aug 2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam. Fringilla quam urna.",
  },
  {
    company: "CMU School of Computer Science",
    title: "Teaching Assistant",
    duration: "Aug 2023 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam. Fringilla quam urna.",
  },
];

function ExperienceSection() {
  const [activeIndexes, setActiveIndexes] = useState([0]);

  const toggle = (index) => {
    setActiveIndexes((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-layout">
        <h2 className="section-title">Experience</h2>
        <div className="accordion">
          {experiences.map((exp, index) => {
            const isOpen = activeIndexes.includes(index);

            return (
              <motion.div
                key={index}
                layout
                initial={false}
                className="accordion-item"
                transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                style={{
                  borderRadius: "12px",
                  padding: "1rem",
                  backgroundColor: "#212020",
                  boxShadow: isOpen
                    ? "0 4px 12px rgba(0,0,0,0.06)"
                    : "0 2px 6px rgba(0,0,0,0.03)",
                }}
                onClick={() => toggle(index)}
              >
                <motion.header
                  layout="position"
                  className="accordion-header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "white"
                  }}
                >
                  <div>
                    {exp.title} | <strong>{exp.company}</strong>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: "1.2rem" }}
                  >
                    <FiChevronRight />
                  </motion.div>
                </motion.header>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ paddingTop: "0.75rem", color: "white" }}>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            fontStyle: "italic",
                            color: "white",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {exp.duration}
                        </p>
                        <p>{exp.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function BannerSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src="/me.jpg" alt="Me" className="hero-image" />
        <div className="hero-text">
          <h1 style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 500,
            fontSize: "3rem",
            marginBottom: "1rem",
          }}>
            <Typewriter
              words={["Hello World", "I'm Intat", "Welcome!"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a.
          </p>
          <div className="social-bar">
            <a
              href="https://github.com/intchrkl"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaGithub className="social-icon" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/intat"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaLinkedin className="social-icon" />
              LinkedIn
            </a>
            <a
              href="mailto:intat.tochirakul@gmail.com"
              className="social-button"
            >
              <FiMail className="social-icon" />
              Email
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;

