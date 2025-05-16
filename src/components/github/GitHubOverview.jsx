import React from "react";
import { useState, useEffect } from "react";
import { RepoCard } from "../../components/github/RepoCard";

function ContributionsHeatMap({ username }) {
    return (
        <>
            <img
                src={`https://github-contributions-api.deno.dev/${username}.svg`}
                alt="GitHub contributions heatmap"
                style={{ maxWidth: "100%", 
                         marginTop: "1rem",
                         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                         borderRadius: "8px",
                         padding: "12px 4px 4px 4px" }}
            />
        </>
    )
}

function GitHubOverview(){
    const username = 'intchrkl';
    
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const githubEventsApi = `https://api.github.com/users/${username}/events/public`;
        fetch(githubEventsApi)
            .then((res) => res.json())
            .then((data) => {
                // console.log("GitHub events: ", data);
                setEvents(data);
            })
            .catch((err) => console.error("GitHub API error: ", err))
    }, []);

    
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const githubReposApi = `https://api.github.com/users/${username}/repos`
        fetch(githubReposApi)
            .then((res) => res.json())
            .then((data) => {
                // console.log("GitHub repos: ", data);
                setRepos(data);
            })
            .catch((err) => console.error("GitHub API error: ", err))
    }, []);
    
    // console.log("repos: ", repos[0]);

    // console.log("events:", events[0]);

    // Get 4 repos I've committed to most recently
    let repoIds = []
    for (const event of events) {
        if (event.type === 'PushEvent') {
            console.log(event);
            repoIds.push(event.repo.id);
        }
    }
    const repoLimit = 3;
    const uniqueRepoIds = Array.from(new Set(repoIds)).splice(0, repoLimit);
    const repoDatas = uniqueRepoIds
                    .map(id => repos.find(repo => repo.id === id))
                    .filter(Boolean);

    return (
        <>
            <h2>GitHub</h2>
            <ContributionsHeatMap username={username}/>
            <div>
                {repoDatas.map(repo => (
                    <RepoCard key={repo.id} repoData={repo}/>
                ))}
            </div>
        </>
    )
}

export default GitHubOverview;