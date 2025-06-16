import { motion, useScroll } from "motion/react"

export function ScrollIndicator() {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#212020",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)", // for Safari support
                    zIndex: 1000,
                }}
            />
    )
} 