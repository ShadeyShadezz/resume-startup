import { useState } from "react";

const DEFAULT_PROJECTS = [
  { id: 1, title: "Business Pitch", requiredStrength: "Communication" },
  { id: 2, title: "Budget Challenge", requiredStrength: "Math" },
  { id: 3, title: "Career Exploration", requiredStrength: "Research" },
  { id: 4, title: "Credit Card Management", requiredStrength: "Financial Literacy" },
  { id: 5, title: "Tax Document Understanding", requiredStrength: "Attention to Detail" },
  { id: 6, title: "Apartment Application", requiredStrength: "Organization" },
  { id: 7, title: "Employment Application", requiredStrength: "Communication" },
  { id: 8, title: "Resume Building", requiredStrength: "Writing" },
  { id: 9, title: "Interview Preparation", requiredStrength: "Public Speaking" },
  { id: 10, title: "Networking Skills", requiredStrength: "Social Skills" },
];

const MIN_WORK_ETHIC = 6;

// Pre-generated applicants with variety and rivals
const INITIAL_APPLICANTS = [
  {
    id: 1001,
    name: "Alex Rivera",
    strength: "Communication",
    weakness: "Time Management",
    workEthic: 8,
    willing: true,
    isRival: false,
    bestFitProject: "Business Pitch",
  },
  {
    id: 1002,
    name: "Jordan Chen",
    strength: "Math",
    weakness: "Public Speaking",
    workEthic: 9,
    willing: true,
    isRival: false,
    bestFitProject: "Budget Challenge",
  },
  {
    id: 1003,
    name: "Taylor Morgan",
    strength: "Research",
    weakness: "Teamwork",
    workEthic: 7,
    willing: true,
    isRival: false,
    bestFitProject: "Career Exploration",
  },
  {
    id: 1004,
    name: "Casey Blake",
    strength: "Financial Literacy",
    weakness: "Organization",
    workEthic: 8,
    willing: true,
    isRival: false,
    bestFitProject: "Credit Card Management",
  },
  {
    id: 1005,
    name: "Morgan Davis",
    strength: "Attention to Detail",
    weakness: "Speed",
    workEthic: 9,
    willing: true,
    isRival: false,
    bestFitProject: "Tax Document Understanding",
  },
  {
    id: 1006,
    name: "Riley Thompson",
    strength: "Organization",
    weakness: "Decision Making",
    workEthic: 7,
    willing: true,
    isRival: false,
    bestFitProject: "Apartment Application",
  },
  {
    id: 1007,
    name: "Sam Parker",
    strength: "Writing",
    weakness: "Technical Skills",
    workEthic: 8,
    willing: true,
    isRival: false,
    bestFitProject: "Resume Building",
  },
  {
    id: 1008,
    name: "Avery Johnson",
    strength: "Public Speaking",
    weakness: "Nervousness",
    workEthic: 6,
    willing: true,
    isRival: false,
    bestFitProject: "Interview Preparation",
  },
  {
    id: 1009,
    name: "Quinn Martinez",
    strength: "Social Skills",
    weakness: "Follow-through",
    workEthic: 7,
    willing: true,
    isRival: false,
    bestFitProject: "Networking Skills",
  },
  // Rival Applicants - Lower work ethic or unwilling to learn
  {
    id: 2001,
    name: "Blake Winters",
    strength: "Communication",
    weakness: "Attitude",
    workEthic: 4,
    willing: false,
    isRival: true,
    bestFitProject: "Business Pitch",
  },
  {
    id: 2002,
    name: "Drew Sterling",
    strength: "Math",
    weakness: "Laziness",
    workEthic: 3,
    willing: false,
    isRival: true,
    bestFitProject: "Budget Challenge",
  },
  {
    id: 2003,
    name: "Skyler Fox",
    strength: "Research",
    weakness: "Procrastination",
    workEthic: 5,
    willing: false,
    isRival: true,
    bestFitProject: "Career Exploration",
  },
  {
    id: 2004,
    name: "Reese Knight",
    strength: "Financial Literacy",
    weakness: "Carelessness",
    workEthic: 4,
    willing: false,
    isRival: true,
    bestFitProject: "Credit Card Management",
  },
];

export default function Applicants() {
  const [applicants, setApplicants] = useState(INITIAL_APPLICANTS);
  const [students, setStudents] = useState([]);
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [filterEthic, setFilterEthic] = useState(MIN_WORK_ETHIC);
  const [filterWilling, setFilterWilling] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newApplicant = {
      id: Date.now(),
      name: form.name.value,
      strength: form.strength.value,
      weakness: form.weakness.value,
      workEthic: parseInt(form.workEthic.value),
      willing: form.willing.checked,
    };

    setApplicants([...applicants, newApplicant]);
    form.reset();
  };

  const acceptApplicant = (id) => {
    const accepted = applicants.find((a) => a.id === id);
    if (accepted) {
      setStudents([...students, { ...accepted, project: null }]);
      setApplicants(applicants.filter((a) => a.id !== id));
    }
  };

  const rejectApplicant = (id) => {
    setApplicants(applicants.filter((a) => a.id !== id));
  };

  const handleAutoSelect = () => {
    const filtered = applicants.filter(
      (a) => a.workEthic >= filterEthic && (!filterWilling || a.willing)
    );

    setStudents([...students, ...filtered.map((a) => ({ ...a, project: null }))]);
    setApplicants(applicants.filter((a) => !filtered.includes(a)));
  };

  const assignProject = (projectId, studentId) => {
    setStudents(
      students.map((s) =>
        s.id === parseInt(studentId)
          ? { ...s, project: projects.find((p) => p.id === projectId).title }
          : s
      )
    );
  };

  return (
    <main>
      {/* Applicant Form Section */}
      <section>
        <h2>Add Applicant</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" required />
          <input name="strength" placeholder="Natural Strength" required />
          <input name="weakness" placeholder="Needs Improvement" required />

          <label>
            Work Ethic (1–10)
            <input type="range" name="workEthic" min="1" max="10" defaultValue="5" />
          </label>

          <label>
            <input type="checkbox" name="willing" /> Willing to Learn
          </label>

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </section>

      {/* Applicants Review Section */}
      <section>
        <h3>Applicants ({applicants.length})</h3>

        {applicants.length === 0 ? (
          <p style={{ color: "#888", fontStyle: "italic" }}>No applicants yet.</p>
        ) : (
          applicants.map((app) => (
            <div key={app.id} className={`card ${app.isRival ? "rival-card" : ""}`}>
              <div className="applicant-header">
                <h4>{app.name}</h4>
                {app.isRival && <span className="rival-badge">⚠️ Rival</span>}
              </div>
              <p>
                <b>Strength:</b> {app.strength}
              </p>
              <p>
                <b>Weakness:</b> {app.weakness}
              </p>
              <p>
                <b>Work Ethic:</b> {app.workEthic}/10
              </p>
              <p>
                <b>Willing to Learn:</b> {app.willing ? "Yes" : "No"}
              </p>
              <p>
                <b>Best Fit Project:</b> {app.bestFitProject}
              </p>
              <button onClick={() => acceptApplicant(app.id)}>Accept</button>
              <button onClick={() => rejectApplicant(app.id)}>Reject</button>
            </div>
          ))
        )}

        <div className="controls">
          <label>
            Min Work Ethic:
            <input
              type="number"
              min="1"
              max="10"
              value={filterEthic}
              onChange={(e) => setFilterEthic(parseInt(e.target.value))}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterWilling}
              onChange={(e) => setFilterWilling(e.target.checked)}
            />
            Must Be Willing
          </label>
          <button onClick={handleAutoSelect}>Auto-select top candidates</button>
        </div>
      </section>

      {/* Enrolled Students Section */}
      <section className="mt-2">
        <h3>Enrolled Students ({students.length})</h3>

        {students.length === 0 ? (
          <p style={{ color: "#888", fontStyle: "italic" }}>No students enrolled yet.</p>
        ) : (
          students.map((student) => (
            <div key={student.id} className="card">
              <h4>{student.name}</h4>
              <p>
                <b>Project:</b> {student.project || "Not assigned"}
              </p>
            </div>
          ))
        )}
      </section>

      {/* Project Assignment Section */}
      <section className="mt-2">
        <h3>Project Board</h3>

        {projects.map((proj) => (
          <div key={proj.id} className="card">
            <h4>{proj.title}</h4>
            <select onChange={(e) => assignProject(proj.id, e.target.value)} defaultValue="">
              <option value="" disabled>
                Assign to...
              </option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </section>
    </main>
  );
}
