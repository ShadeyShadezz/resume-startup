import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Welcome to the Career & Adulting Lab</h2>
      <p>Learn business, life skills, and explore real-world career paths.</p>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/applicants">Go to Applicants →</Link>
      </div>
    </section>
  );
}
