import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Applicants from "./pages/Applicants.jsx";
import Projects from "./pages/Projects.jsx";
import Collaborators from "./pages/Collaborators.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Career & Adulting Lab</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/applicants">Applicants</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/collaborators">Collaborators</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/collaborators" element={<Collaborators />} />
      </Routes>
    </BrowserRouter>
  );
}
