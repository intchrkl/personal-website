import { motion } from "framer-motion";
import "./Navbar.css";

export function Navbar() {
  const links = [
    { label: "About", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "/resume.pdf", external: true },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">Intat Tochirakul</div>
      <div className="navbar-links">
        {links.map(({ label, href, external }) => (
          <motion.a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="nav-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {label}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}
