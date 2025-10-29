import { useState } from "react";

const INITIAL_COLLABORATORS = [
  {
    id: 1,
    name: "Collaborator 1",
    role: "Business Mentor",
    expertise: "Entrepreneurship & Strategy",
    availability: "Available",
  },
  {
    id: 2,
    name: "Collaborator 2",
    role: "Financial Advisor",
    expertise: "Personal Finance & Budgeting",
    availability: "Available",
  },
  {
    id: 3,
    name: "Collaborator 3",
    role: "Career Coach",
    expertise: "Career Development & Networking",
    availability: "Busy",
  },
];

export default function Collaborators() {
  const [collaborators, setCollaborators] = useState(INITIAL_COLLABORATORS);
  const [newCollaborator, setNewCollaborator] = useState({
    name: "",
    role: "",
    expertise: "",
    availability: "Available",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newCollaborator.name.trim()) return;

    const collaboratorToAdd = {
      id: Date.now(),
      ...newCollaborator,
    };

    setCollaborators([...collaborators, collaboratorToAdd]);
    setNewCollaborator({
      name: "",
      role: "",
      expertise: "",
      availability: "Available",
    });
  };

  const handleChange = (field, value) => {
    setNewCollaborator({ ...newCollaborator, [field]: value });
  };

  const deleteCollaborator = (id) => {
    setCollaborators(collaborators.filter((c) => c.id !== id));
  };

  return (
    <main>
      <section>
        <h2>Collaborators Dashboard</h2>
        <p style={{ marginBottom: "1.5rem", color: "#64748b" }}>
          Connect with mentors, advisors, and industry professionals who can guide your career journey.
        </p>

        {/* Main Collaborators Frame */}
        <div className="collaborators-main-frame">
          <div className="collaborators-inner-section">
            <h3 style={{ marginBottom: "1rem", color: "#6366f1" }}>Active Collaborators</h3>
            
            {collaborators.map((collab) => (
              <div key={collab.id} className="collaborator-box">
                <div className="collaborator-content">
                  <h4>{collab.name}</h4>
                  <p><b>Role:</b> {collab.role}</p>
                  <p><b>Expertise:</b> {collab.expertise}</p>
                  <span className={`availability-badge ${collab.availability.toLowerCase()}`}>
                    {collab.availability}
                  </span>
                </div>
                <button onClick={() => deleteCollaborator(collab.id)} className="delete-btn">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add New Collaborator Form */}
      <section>
        <h3>Add New Collaborator</h3>
        <form onSubmit={handleSubmit} className="form-vertical">
          <input
            type="text"
            placeholder="Collaborator Name"
            value={newCollaborator.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Role (e.g., Business Mentor)"
            value={newCollaborator.role}
            onChange={(e) => handleChange("role", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Expertise Area"
            value={newCollaborator.expertise}
            onChange={(e) => handleChange("expertise", e.target.value)}
            required
          />
          <select
            value={newCollaborator.availability}
            onChange={(e) => handleChange("availability", e.target.value)}
          >
            <option value="Available">Available</option>
            <option value="Busy">Busy</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          <button type="submit">Add Collaborator</button>
        </form>
      </section>
    </main>
  );
}

