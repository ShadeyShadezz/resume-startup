import React, { useState } from "react";

export default function Applicants() {
  const [applicants, setApplicants] = useState([]);
  const [students, setStudents] = useState([]);
  const [projects, setProjects] = useState([
    { id: 1, title: "Business Pitch" },
    { id: 2, title: "Budget Challenge" },
    { id: 3, title: "Career Exploration" },
  ]);

  // Handle form submit
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

  // Accept / Reject
  const acceptApplicant = (id) => {
    const accepted = applicants.find((a) => a.id === id);
    setStudents([...students, { ...accepted, project: null }]);
    setApplicants(applicants.filter((a) => a.id !== id));
  };

  const rejectApplicant = (id) => {
    setApplicants(applicants.filter((a) => a.id !== id));
  };

  // Auto-select top candidates
  const handleAutoSelect = () => {
    const minWorkEthic = parseInt(
      document.getElementById("minWorkEthic").value
    );
    const mustBeWilling = document.getElementById("mustBeWilling").checked;

    const filtered = applicants.filter(
      (a) => a.workEthic >= minWorkEthic && (!mustBeWilling || a.willing)
    );

    setStudents([...students, ...filtered.map((a) => ({ ...a, project: null }))]);
    setApplicants(applicants.filter((a) => !filtered.includes(a)));
  };

  // Assign project
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
    <main style={{ padding: "2rem" }}>
      <h2>Add Applicant</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
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

      <section>
        <h3>Applicants</h3>
        {applicants.map((app) => (
          <div
            key={app.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#fffef9",
            }}
          >
            <h4>{app.name}</h4>
            <p>
              <b>Strength:</b> {app.strength}
            </p>
            <p>
              <b>Weakness:</b> {app.weakness}
            </p>
            <p>
              <b>Work Ethic:</b> {app.workEthic}
            </p>
            <p>
              <b>Willing to Learn:</b> {app.willing ? "Yes" : "No"}
            </p>
            <button onClick={() => acceptApplicant(app.id)}>Accept</button>
            <button onClick={() => rejectApplicant(app.id)}>Reject</button>
          </div>
        ))}

        <div style={{ marginTop: "1rem" }}>
          <label>Min Work Ethic:</label>
          <input type="number" id="minWorkEthic" min="1" max="10" defaultValue="6" />
          <label>
            <input type="checkbox" id="mustBeWilling" /> Must Be Willing
          </label>
          <button onClick={handleAutoSelect}>Auto-select top candidates</button>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Enrolled Students</h3>
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#fefefe",
            }}
          >
            <h4>{student.name}</h4>
            <p>
              <b>Assigned Project:</b> {student.project || "None"}
            </p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Project Board</h3>
        {projects.map((proj) => (
          <div
            key={proj.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#fff",
            }}
          >
            <h4>{proj.title}</h4>
            <select
              onChange={(e) => assignProject(proj.id, e.target.value)}
              defaultValue=""
            >
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
