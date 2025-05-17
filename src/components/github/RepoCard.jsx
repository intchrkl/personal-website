import React, { useEffect, useState } from "react";
import "./RepoCard.css";
import { motion } from "framer-motion";

export function RepoCard({ repoData }) {
    const [languages, setLanguages] = useState({});

    useEffect(() => {
        fetch(repoData.languages_url)
            .then((res) => res.json())
            .then((data) => setLanguages(data))
            .catch((err) => console.error("Failed to fetch languages", err));
    }, [repoData.languages_url]);

    const sortedLanguages = Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    const totalBytes = sortedLanguages.reduce((acc, [, bytes]) => acc + bytes, 0);

    return (
        <motion.div
        className="repo-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        >
            <h3>
                <a
                    href={repoData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-link"
                >
                    {repoData.name}
                </a>
            </h3>

            {repoData.description && (
                <p className="repo-description">{repoData.description}</p>
            )}

            {/* Language bar */}
            {totalBytes > 0 && (
                <div className="language-bar">
                    {sortedLanguages.map(([lang, bytes]) => (
                        <div
                            key={lang}
                            className="language-segment"
                            style={{
                                width: `${(bytes / totalBytes) * 100}%`,
                                backgroundColor: getColorForLanguage(lang),
                            }}
                            title={`${lang}: ${(bytes / totalBytes * 100).toFixed(1)}%`}
                        />
                    ))}
                </div>
            )}

            {totalBytes > 0 && (
                <div className="language-legend">
                    {sortedLanguages.map(([lang, bytes]) => (
                        <div key={lang} className="legend-item">
                            <span
                                className="legend-color"
                                style={{ backgroundColor: getColorForLanguage(lang) }}
                            ></span>
                            <span className="legend-label">{lang}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="repo-meta" style={{ marginTop: "1rem" }}>
                <span>
                    Last commit: {new Date(repoData.updated_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        })}
                </span>
            </div>
        </motion.div>
    );
}

function getColorForLanguage(lang) {
    const colors = {
        JavaScript: "#f1e05a",
        TypeScript: "#2b7489",
        HTML: "#e34c26",
        CSS: "#563d7c",
        Python: "#3572A5",
        Shell: "#89e051",
        Java: "#b07219",
        C: "#555555",
        "C++": "#f34b7d",
        Ruby: "#8B0000",
        default: "#ccc",
    };
    return colors[lang] || colors.default;
}
