import React from "react";
import { useState, useEffect } from "react";
import { RepoCard } from "./RepoCard";
import { Contributions } from "./Contributions";

function GitHubOverview() {
    const username = 'intchrkl';

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const githubEventsApi = `https://api.github.com/users/${username}/events/public`;
        const githubReposApi = `https://api.github.com/users/${username}/repos`;

        const delay = new Promise((res) => setTimeout(res, 800)); // ⏱️ min delay

        Promise.all([
            fetch(githubEventsApi)
                .then((res) => res.json())
                .then((data) => Array.isArray(data) ? data : [])
                .catch(() => []),
            fetch(githubReposApi)
                .then((res) => res.json())
                .then((data) => Array.isArray(data) ? data : [])
                .catch(() => []),
            delay,
        ]).then(([fetchedEvents, fetchedRepos]) => {
            setEvents(fetchedEvents);
            setRepos(fetchedRepos);
            setLoading(false);
        });
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

    // Get 3 repos I've committed to most recently
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
            <Contributions username={username} />
            <h3>Stuff I've worked on recently</h3>
            <div style={{ marginTop: "2rem" }}>
                {loading || repoDatas.length === 0 ? (
                    <p>Loading recent repositories...</p>
                ) : (
                    repoDatas.map((repo) => (
                        <RepoCard key={repo.id} repoData={repo} />
                    ))
                )}
            </div>
        </>
    );
}

export default GitHubOverview;