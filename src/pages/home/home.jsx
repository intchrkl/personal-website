import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
import { motion } from "framer-motion"
import projectData from "../../data/projects.json";
import { RepoLanguages } from "../../components/github/RepoLanguages"
import { useState, useEffect } from "react";

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <div className="banner-wrapper">
          <Banner />
        </div>
        <div className="content-wrapper">
          <AboutMe />
          <Line />
          <Experience />
          <Line />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;

function Banner() {
  return (
    <div className="banner">
      <h1 style={{ fontFamily: "monospace", fontSize: "3rem", marginBottom: "1rem" }}>
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
    </div>
  )
}

function Line({ color = '#414141', thickness = '1px', margin = '2rem 0' }) {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: `${thickness} solid ${color}`,
        margin,
        width: '100%',
      }}
    />
  );
}


function AboutMe() {
  return (
    <motion.div className="about-me" style={{ textAlign: "left" }}>
      <h1>About Me</h1>
      <p>Hi! I'm Intat, an undergraduate at Carnegie Mellon University studying Information Systems with a minor in Computer Science. I'm passionate about building thoughtful, user-centered technology—from full-stack web apps to data-driven systems that solve real-world problems. </p>
      <p>At CMU, I've worked on projects that span software engineering, consulting, and machine learning. I enjoy bridging the gap between people and technology—whether that means designing intuitive UIs, streamlining business operations, or contributing to open-source tools. </p>
      <p>Outside of class, you'll find me exploring new frameworks, optimizing workflows, or helping small businesses grow with tech. I'm always looking to learn, collaborate, and build something meaningful.</p>
    </motion.div>
  )
}

function Experience() {
  return (
    <motion.div className="experience" style={{ textAlign: "left" }}>
      <h1>Experience</h1>
    </motion.div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


function Projects() {
  const username = 'intchrkl';
  const githubReposApi = `https://api.github.com/users/${username}/repos`;
  const [repos, setRepos] = useState([]);

  useEffect(() => {

    const delay = new Promise((res) => setTimeout(res, 800));

    Promise.all([
      fetch(githubReposApi)
        .then((res) => res.json())
        .then((data) => Array.isArray(data) ? data : [])
        .catch(() => []),
      delay,
    ]).then(([fetchedRepos]) => {
      setRepos(fetchedRepos);
    });
  }, []);

  const githubData = {};
  for (const proj of projectData) {
    if (proj.repoName) {
      for (const repo of repos) {
        if (repo.name === proj.repoName) {
          githubData[proj.repoName] = repo;
        }
      }
    }
  }

  return (
    <motion.div
      className="projects"
      style={{ textAlign: "left" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1>Projects</h1>
      <p>Here's some stuff I've worked on recently!</p>
      <motion.div className="project-list" variants={containerVariants}>
        {projectData.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <p>
              <strong>Technologies:</strong> {proj.tech.join(", ")}
            </p>
            {proj.repoName && githubData[proj.repoName] && (
              <div>
                <div style={{ marginBottom: "1rem" }}>
                  <ProjectLanguages repo={githubData[proj.repoName]} />
                </div>
                <div className="repo-meta" style={{ marginTop: "1rem" }}>
                  <span>
                    Last commit: {new Date(githubData[proj.repoName].updated_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            )}
            <br></br>
            {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer">
              {proj.linkText} →
            </a>}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}


function Contact() {
  return (
    <motion.div className="contact" style={{ textAlign: "left" }}>
      <h1>Get in touch!</h1>
      <SocialLinks />
    </motion.div>
  )
}

function Education() {
  return (
    <>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        Undergraduate · Carnegie Mellon University
      </p>
    </>
  )
}

function SocialLinks() {
  return (
    <motion.div className="links">
      <ul>
        <li>
          <a href="mailto:intat.tochirakul@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://github.com/intchrkl"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/intat"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </motion.div>
  )
}

function ProjectLanguages({ repo }) {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    if (!repo.languages_url) return;
    fetch(repo.languages_url)
      .then((res) => res.json())
      .then((data) => setLanguages(data))
      .catch((err) => console.error("Language fetch error:", err));
  }, [repo.languages_url]);

  const sortedLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const totalBytes = sortedLanguages.reduce((sum, [, bytes]) => sum + bytes, 0);

  return (
    <>
      {totalBytes > 0 && (
        <RepoLanguages
          totalBytes={totalBytes}
          sortedLanguages={sortedLanguages}
        />
      )}
    </>
  );
}
