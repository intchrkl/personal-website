export function RepoLanguages({ totalBytes, sortedLanguages }) {
    return (
        <>
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
        </>
    )
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