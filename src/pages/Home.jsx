import { Link } from "react-router-dom";
import AICareerAdvisor from "../components/AICareerAdvisor.jsx";

export default function Home() {
  return (
    <main>
      <section className="text-center">
        <h2>Welcome to the Career & Adulting Lab</h2>
        <p>Learn business, life skills, and explore real-world career paths.</p>
        <div className="mt-2">
          <Link to="/applicants">Go to Applicants →</Link>
        </div>
      </section>
      
      <AICareerAdvisor />
    </main>
  );
}
