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
import projects from "../../data/projects.json"



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
          Hi, I’m Intat Tochirakul — a software engineer with experience in fintech and consulting. I’ve worked on digital banking platforms, payment systems, and internal tools that improve how financial services run. Outside of tech, I enjoy Formula 1, watching Suits, and spending time with my dog. I’m also passionate about exploring AI, systems programming, and full-stack development, often through side projects that let me learn by building.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-layout">
        <h2 className="section-title">My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (<div className="project-thumbnail">
                <img
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="project-image"
                />
              </div>)}
              {project.image && (<br />)}
              <h3 className="project-title">{project.title}</h3>
              {project.description.split("\n\n").map((para, i) => (
                <p key={i} className="project-description">{para}</p>
              ))}
              {/* {Array.isArray(project.tags) && (<br />)} */}
              {Array.isArray(project.tags) && project.tags.length > 0 && (
                <div className="project-tags">
                  {project.tags.join(", ")}
                </div>
              )}
              {/* {Array.isArray(project.tags) && (<br />)} */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View on GitHub
                </a>
              )}
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
                <p style={{ textAlign: "left", color: "white" }}>
                  {exp.description}
                </p>
                {Array.isArray(exp.skills) && exp.skills.length > 0 && (
                  <div className="experience-skills">
                    {exp.skills.join(", ")}
                  </div>
                )}
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
    <div id="home">
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
              Hi, I’m Intat, a software engineer with experience in fintech and consulting. I’ve worked on digital banking platforms, payment systems, and internal tools that improve how financial services run. Outside of tech, I enjoy Formula 1, watching Suits, and spending time with my dog. I’m also passionate about exploring AI, systems programming, and full-stack development through side projects that let me learn by building.
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
    </div>
  );

}

export default Home;

