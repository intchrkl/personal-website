import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { Layout } from "./Layout";
import RedirectPage from "./pages/redirects/RedirectPage";
import { Cursor } from "./components/cursor/Cursor";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Cursor /> */}
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* For custom redirects - to remove url conflicts with existing pages */}
          <Route path="/:target" element={<RedirectPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
