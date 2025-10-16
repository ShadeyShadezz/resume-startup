import { useState } from "react";

const DEFAULT_PROJECTS = [
  { id: 1, title: "Business Pitch" },
  { id: 2, title: "Budget Challenge" },
  { id: 3, title: "Career Exploration" },
];

const MIN_WORK_ETHIC = 6;

export default function Applicants() {
  const [applicants, setApplicants] = useState([]);
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
            <div key={app.id} className="card">
              <h4>{app.name}</h4>
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
