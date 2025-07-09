import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
import { motion } from "framer-motion"
import projectData from "../../data/projects.json";
import { RepoLanguages } from "../../components/github/RepoLanguages"
import { useState, useEffect, useRef } from "react";
import { Banner } from "../../components/banner/Banner";
import { ScrollIndicator } from "../../components/scroll/scroll"
import { Navbar } from "../../components/navbar/Navbar";
import { ProjectGallery } from "../../components/projectGallery/ProjectGallery";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


function Home() {
  return (
    <>
      <Navbar />
      <BannerSection />
      {/* <ProjectsSection /> */}
    </>
  );
}

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const projects = projectData; // placeholder for 5 cards

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setActiveIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list" ref={containerRef}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            onClick={() => setActiveIndex(index)}
            animate={{
              scale: activeIndex === index ? 1.7 : 1,
              zIndex: activeIndex === index ? 10 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit ↗
              </a>
            )}
          </motion.div>
        ))}
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

