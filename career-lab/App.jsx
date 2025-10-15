import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Applicants from "./pages/Applicants";
import Students from "./pages/Students";
import Projects from "./pages/Projects";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div>
      <header>
        <h1>Career & Adulting Lab</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/applicants">Applicants</Link> |{" "}
          <Link to="/students">Students</Link> |{" "}
          <Link to="/projects">Projects</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/students" element={<Students />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}
<nav style={{ background: "#f8f8f8", padding: "1rem" }}>
  <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
  <Link to="/applicants" style={{ marginRight: "1rem" }}>Applicants</Link>
  <Link to="/projects">Projects</Link>
</nav>
