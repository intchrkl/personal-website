import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "/resume.pdf", external: true },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <img src="/it_logo.png" alt="Logo" className="navbar-logo" /> */}
        <div className="navbar-brand">
          <a href="#home">Intat Tochirakul</a>
          </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
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
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}
