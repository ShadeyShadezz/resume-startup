import React, { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Business Pitch", description: "Create a short business pitch for a startup idea." },
    { id: 2, title: "Budget Challenge", description: "Plan a realistic monthly budget for a student lifestyle." },
    { id: 3, title: "Career Exploration", description: "Research a career path and present your findings." },
  ]);

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

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Projects Dashboard</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
          marginBottom: "2rem",
        }}
      >
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        ></textarea>
        <button type="submit">Add Project</button>
      </form>

      <section>
        <h3>All Projects</h3>
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
              background: "#fffef9",
            }}
          >
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <button onClick={() => deleteProject(p.id)}>Delete</button>
          </div>
        ))}
      </section>
    </main>
  );
}
