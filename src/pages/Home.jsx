import { Link } from "react-router-dom";
import AICareerAdvisor from "../components/AICareerAdvisor.jsx";
import { PROJECT_DIRECTORY } from "./Projects.jsx";

const THEME_VISUALS = [
  {
    id: "pathways",
    icon: "🧭",
    title: "Career Pathways",
    description: "Discover high-growth roles, emerging industries, and the skills each path demands.",
  },
  {
    id: "skills",
    icon: "🛠️",
    title: "Adulting Skills Labs",
    description: "Master budgeting, networking, and workplace readiness through guided challenges.",
  },
  {
    id: "confidence",
    icon: "🚀",
    title: "Confidence Builders",
    description: "Translate classroom learning into real-world wins with mentors and project feedback.",
  },
];

export default function Home() {
  const featuredProjects = PROJECT_DIRECTORY.slice(0, 3);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Welcome to the Career & Adulting Lab</h2>
            <p>Launch your professional journey with immersive projects, mentorship, and life-ready skills.</p>
            <div className="hero-actions">
              <Link className="cta-primary" to="/projects">
                Explore Projects
              </Link>
              <Link className="cta-secondary" to="/applicants">
                Become an Applicant
              </Link>
            </div>
          </div>
          <div className="hero-highlights">
            <div className="highlight-card">
              <span>🎯</span>
              <h3>Goal-Oriented Tracks</h3>
              <p>Plan milestones, unlock badges, and stay accountable with weekly progress check-ins.</p>
            </div>
            <div className="highlight-card">
              <span>📈</span>
              <h3>Real-World Momentum</h3>
              <p>Practice pitching, budgeting, and presenting through hands-on scenarios and feedback.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-directory">
        <div className="section-header">
          <h2>Projects Directory</h2>
          <p>Preview the hands-on experiences designed to build career confidence.</p>
        </div>
        <div className="directory-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="directory-card">
              <div className="directory-badge">#{project.id}</div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <div className="directory-cta">
          <Link className="cta-inline" to="/projects">
            View the full project line-up →
          </Link>
        </div>
      </section>

      <section className="theme-grid">
        <h2>Career & Adulting Themes</h2>
        <div className="theme-grid-content">
          {THEME_VISUALS.map((item) => (
            <div key={item.id} className="theme-card">
              <span className="theme-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <AICareerAdvisor />
    </main>
  );
}
