import React from "react";
import GitHubOverview from "../../components/github/GitHubOverview"


function About() {
    return (
        <>
            <h1>About Me</h1>
            <p>
                Hi, my name is Intat and I am currently a senior undergraduate
                student in Information Systems with a Minor in Computer Science 
                at Carnegie Mellon University.
            </p>
            <GitHubOverview/>
        </>
    )
}

export default About;