import { motion } from "framer-motion";

export function Contributions({ username }) {
    return (
        <>
            <motion.div
                className="contributions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
            >
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={`https://github-contributions-api.deno.dev/${username}.svg`}
                        alt="GitHub contributions heatmap"
                        style={{
                            maxWidth: "630px",
                            marginTop: "1rem",
                            borderRadius: "8px",
                            padding: "12px 4px 4px 4px"
                        }}
                    />
                </a>
            </motion.div>
        </>
    )
}