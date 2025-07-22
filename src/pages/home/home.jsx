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
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import experiences from "../../data/experiences.json"



function Home() {
  return (
    <>
      <Navbar />
      <BannerSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-layout">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nunc ut libero vestibulum accumsan. Praesent et purus vel massa tincidunt tincidunt ut in ligula. Proin eget dapibus lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "NanoGPT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lectus et urna tincidunt euismod.",
    image: "https://via.placeholder.com/600x300", // placeholder image
    link: "#",
    github: "#"
  }
  // Add more projects here
];

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-layout">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* <div className="project-thumbnail" /> */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-layout">
        <h2 className="section-title">Experience</h2>
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card"
              style={{
                borderRadius: "12px",
                padding: "1rem",
                backgroundColor: "#212020",
                boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.3)",
                display: "flex",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    flexShrink: 0,
                    marginTop: "0.5rem",
                    marginLeft: "0.5rem"
                  }}
                />
              </a>
              <div style={{ color: "white", marginTop: "0.5rem" }}>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", color: "inherit" }}
                >
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, textAlign: "left" }}>
                    <span style={{
                      fontWeight: 400,
                      textAlign: "left"
                    }}>{exp.title}</span>
                    {" "} | <strong>{exp.company}</strong>
                  </div>
                </a>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    marginBottom: "0.25rem",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  {exp.duration}
                </p>
                <p style={{ textAlign: "left", color: "white" }}>{exp.description}</p>
              </div>
            </div>
          ))}
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
            fontWeight: 400,
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

