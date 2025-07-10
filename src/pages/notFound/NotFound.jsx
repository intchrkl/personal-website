import React from "react";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "white" }}>
      <h1>404 - Page Not Found</h1>
      <p>Woops! The page you're looking for doesn't exist.</p>
      <a href="/" className="social-button" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
        <FaHome className="social-icon" />
        Go back home
      </a>
    </div>
  );
}
