import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link> 
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>
        </>
    )
}