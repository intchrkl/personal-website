import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../../App.css";

function Home() {
  return (
    <>
      <header className="hero">
        {/* Typing animation above your name */}
        <h1 style={{ fontFamily: "monospace", marginBottom: "0.5rem" }}>
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

        <p>Undergraduate · Carnegie Mellon University</p>
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
      </header>
    </>
  );
}

export default Home;
