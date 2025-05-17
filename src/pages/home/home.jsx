import React from "react";
import { Typewriter } from "react-simple-typewriter";
import GitHubOverview from "../../components/github/GitHubOverview";
import { ProjectList } from "../../components/projects/ProjectList"
import "./home.css";

function Home() {
  return (
    <>
      <Banner />
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Education />
        <SocialLinks />
        <Bio />
        <GitHubOverview />
        <ProjectList />
      </div>

    </>
  );
}

export default Home;

function Banner() {
  return (
    <>
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
    </>
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
      <div className="bio" style={{ fontSize:"20px", textAlign:"justify" }}>
        <p>
          Hi, my name is Intat and I am currently a senior undergraduate
          student in Information Systems with a Minor in Computer Science
          at Carnegie Mellon University.
        </p>
      </div>
    </>
  )
}
