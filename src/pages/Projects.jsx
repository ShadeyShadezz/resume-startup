import { useState } from "react";

export const PROJECT_DIRECTORY = [
  {
    id: 1,
    title: "Business Pitch",
    description: "Create a short business pitch for a startup idea.",
    category: "Entrepreneurship",
  },
  {
    id: 2,
    title: "Budget Challenge",
    description: "Plan a realistic monthly budget for a student lifestyle.",
    category: "Financial Literacy",
  },
  {
    id: 3,
    title: "Career Exploration",
    description: "Research a career path and present your findings.",
    category: "Career Development",
  },
  {
    id: 4,
    title: "Credit Card Management",
    description: "Learn how to responsibly use credit cards, understand APR, credit scores, and payment strategies.",
    category: "Financial Literacy",
  },
  {
    id: 5,
    title: "Tax Document Understanding",
    description: "Navigate W-2s, 1099s, and basic tax filing. Understand deductions and tax brackets.",
    category: "Financial Literacy",
  },
  {
    id: 6,
    title: "Apartment Application",
    description: "Complete a rental application, understand lease agreements, security deposits, and tenant rights.",
    category: "Life Skills",
  },
  {
    id: 7,
    title: "Employment Application",
    description: "Fill out job applications, understand employment forms (W-4, I-9), and workplace policies.",
    category: "Career Development",
  },
  {
    id: 8,
    title: "Resume Building",
    description: "Create a professional resume highlighting skills, experience, and achievements.",
    category: "Career Development",
  },
  {
    id: 9,
    title: "Interview Preparation",
    description: "Practice common interview questions, body language, and professional communication.",
    category: "Career Development",
  },
  {
    id: 10,
    title: "Networking Skills",
    description: "Learn to build professional relationships, use LinkedIn, and attend networking events.",
    category: "Career Development",
  },
  {
    id: 11,
    title: "Insurance Basics",
    description: "Understand health, auto, and renter's insurance. Learn to compare plans and file claims.",
    category: "Life Skills",
  },
  {
    id: 12,
    title: "Banking Essentials",
    description: "Open checking/savings accounts, understand fees, overdrafts, and online banking.",
    category: "Financial Literacy",
  },
  {
    id: 13,
    title: "Student Loan Management",
    description: "Navigate student loans, repayment plans, interest rates, and loan forgiveness programs.",
    category: "Financial Literacy",
  },
  {
    id: 14,
    title: "Professional Email Writing",
    description: "Craft professional emails for various workplace scenarios and communications.",
    category: "Communication",
  },
  {
    id: 15,
    title: "Time Management Workshop",
    description: "Develop strategies for prioritizing tasks, meeting deadlines, and work-life balance.",
    category: "Life Skills",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(PROJECT_DIRECTORY);
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
            <div key={p.id} className="card project-card">
              <div className="project-header">
                <h4>{p.title}</h4>
                {p.category && <span className="category-badge">{p.category}</span>}
              </div>
              <p>{p.description}</p>
              <button onClick={() => deleteProject(p.id)}>Delete</button>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
