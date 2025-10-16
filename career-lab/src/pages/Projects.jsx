import { useState } from "react";

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Business Pitch",
    description: "Create a short business pitch for a startup idea.",
  },
  {
    id: 2,
    title: "Budget Challenge",
    description: "Plan a realistic monthly budget for a student lifestyle.",
  },
  {
    id: 3,
    title: "Career Exploration",
    description: "Research a career path and present your findings.",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newProject.title.trim()) return;

    const projectToAdd = {
      id: Date.now(),
      title: newProject.title,
      description: newProject.description,
    };

    setProjects([...projects, projectToAdd]);
    setNewProject({ title: "", description: "" });
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleChange = (field, value) => {
    setNewProject({ ...newProject, [field]: value });
  };

  return (
    <main>
      {/* Add Project Form */}
      <section>
        <h2>Projects Dashboard</h2>
        <form onSubmit={handleSubmit} className="form-vertical">
          <input
            type="text"
            placeholder="Project Title"
            value={newProject.title}
            onChange={(e) => handleChange("title", e.target.value)}
            required
          />
          <textarea
            placeholder="Project Description"
            value={newProject.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <button type="submit">Add Project</button>
        </form>
      </section>

      {/* Projects List */}
      <section>
        <h3>All Projects ({projects.length})</h3>

        {projects.length === 0 ? (
          <p style={{ color: "#888", fontStyle: "italic" }}>No projects yet.</p>
        ) : (
          projects.map((p) => (
            <div key={p.id} className="card">
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <button onClick={() => deleteProject(p.id)}>Delete</button>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
