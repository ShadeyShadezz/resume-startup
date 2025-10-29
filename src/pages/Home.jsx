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

      {/* Overview Section */}
      <section className="overview-section">
        <h2>📋 Overview of Purpose for Site</h2>
        <p>
          The Career & Adulting Lab is designed to bridge the gap between classroom learning and real-world readiness.
          We provide hands-on projects, mentorship opportunities, and practical life skills training to help students
          navigate their professional journey with confidence. From managing finances to building careers, we equip
          young adults with the tools they need to thrive in today's dynamic world.
        </p>
      </section>

      {/* Home Info Grid */}
      <div className="home-info-grid">
        <div className="info-box">
          <h3>👥 Collaborators in Business(es)</h3>
          <p>
            Connect with industry professionals, mentors, and business leaders who provide real-world insights
            and guidance. Our collaborators bring diverse expertise in entrepreneurship, finance, technology,
            and career development.
          </p>
        </div>

        <div className="info-box info-box-tall">
          <h3>📚 Projects to Learn On</h3>
          <p>
            Engage in practical, real-world projects that build essential life and career skills:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", color: "#475569" }}>
            <li>Credit Card & Financial Management</li>
            <li>Tax Document Understanding</li>
            <li>Apartment & Employment Applications</li>
            <li>Resume Building & Interview Prep</li>
            <li>Business Pitches & Budget Planning</li>
            <li>Professional Communication</li>
            <li>Insurance & Banking Essentials</li>
            <li>Time Management & Networking</li>
          </ul>
        </div>

        <div className="info-box">
          <h3>📖 Resources + Topics</h3>
          <p>
            Access curated learning materials, workshops, and guides covering financial literacy, career development,
            life skills, and professional communication. Our resources are designed to support your growth at every
            stage of your journey.
          </p>
        </div>

        <div className="info-box">
          <h3>🎓 Students Criteria</h3>
          <p>
            We welcome motivated students who demonstrate a willingness to learn, strong work ethic, and commitment
            to personal growth. Applicants are evaluated based on their strengths, areas for improvement, and
            alignment with project requirements.
          </p>
        </div>
      </div>

      <AICareerAdvisor />
    </main>
  );
}
