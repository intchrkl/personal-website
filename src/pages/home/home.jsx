import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
import { motion } from "framer-motion"

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
      <p>Hello! I'm Intat and I am currently an undergraduate student in Information Systems with a minor in Computer Science at Carnegie Mellon University. Hello! I'm Intat and I am currently an undergraduate student in Information Systems with a minor in Computer Science at Carnegie Mellon University. Hello! I'm Intat and I am currently an undergraduate student in Information Systems with a minor in Computer Science at Carnegie Mellon University. Hello! I'm Intat and I am currently an undergraduate student in Information Systems with a minor in Computer Science at Carnegie Mellon University. </p>
    </motion.div>
  )
}

function Experience() {
  return (
    <motion.div className="experience" style={{ textAlign: "left" }}>
      <h1>Experience</h1>
      <p>Hello! I'm Intat and I am currently an undergraduate student in Information Systems with a minor in Computer Science at Carnegie Mellon University. Hello! I'm Intat and I am currently an undergraduate student in Information Systems with a minor in Computer Science at Carnegie Mellon University. Hello! I'm Intat and I am currently an undergraduate student in Information Systems with a minor in Computer Science at Carnegie Mellon University. Hello! I'm Intat and I am currently an undergraduate student in Information Systems with a minor in Computer Science at Carnegie Mellon University. </p>
    </motion.div>
  )
}

function Projects() {
  return (
    <motion.div className="projects" style={{ textAlign: "left" }}>
      <h1>My Projects</h1>
      <p>Here's some stuff I've worked on recently!</p>
      <motion.div className="project-list">
        
      </motion.div>
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
    <>
      <div className="links">
        <a href="mailto:intat.tochirakul@gmail.com">Email</a>
        <a
          href="https://github.com/intchrkl"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/intat"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </>
  )
}

function Bio() {
  return (
    <>
      <div className="bio" style={{ fontSize: "20px", textAlign: "justify" }}>
        <p>
          Hi, my name is Intat and I am currently a senior undergraduate
          student in Information Systems with a Minor in Computer Science
          at Carnegie Mellon University.
        </p>
      </div>
    </>
  )
}
