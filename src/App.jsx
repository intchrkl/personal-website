import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import { Layout } from "./Layout";
import RedirectPage from "./pages/redirects/RedirectPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/redirects/:target" element={<RedirectPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
