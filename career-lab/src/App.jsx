import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Applicants from "./pages/Applicants.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <header
        style={{
          background: "linear-gradient(90deg, #facc15, #f59e0b)",
          color: "white",
          padding: "1rem",
        }}
      >
        <h1>Career & Adulting Lab</h1>
        <nav style={{ marginTop: "0.5rem" }}>
          <Link to="/" style={{ marginRight: "1rem", color: "white" }}>
            Home
          </Link>
          <Link to="/applicants" style={{ marginRight: "1rem", color: "white" }}>
            Applicants
          </Link>
          <Link to="/projects" style={{ color: "white" }}>
            Projects
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
