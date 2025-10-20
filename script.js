// Data storage
let applicants = [];
let students = [];
let projects = [
  { id: 1, title: "Business Pitch" },
  { id: 2, title: "Budget Challenge" },
  { id: 3, title: "Career Exploration" }
];

// Elements
const applicantForm = document.getElementById("applicantForm");
const applicantsList = document.getElementById("applicantsList");
const studentsList = document.getElementById("studentsList");
const projectsList = document.getElementById("projectsList");

// Add applicant
applicantForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newApplicant = {
    id: Date.now(),
    name: document.getElementById("name").value,
    strength: document.getElementById("strength").value,
    weakness: document.getElementById("weakness").value,
    workEthic: parseInt(document.getElementById("workEthic").value),
    willing: document.getElementById("willing").checked,
  };
  applicants.push(newApplicant);
  renderApplicants();
  applicantForm.reset();
});

// Render applicants
function renderApplicants() {
  applicantsList.innerHTML = "";
  applicants.forEach((app) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${app.name}</h3>
      <p><b>Strength:</b> ${app.strength}</p>
      <p><b>Weakness:</b> ${app.weakness}</p>
      <p><b>Work Ethic:</b> ${app.workEthic}</p>
      <p><b>Willing to Learn:</b> ${app.willing ? "Yes" : "No"}</p>
      <button onclick="acceptApplicant(${app.id})">Accept</button>
      <button onclick="rejectApplicant(${app.id})">Reject</button>
    `;
    applicantsList.appendChild(card);
  });
}

// Accept/Reject
function acceptApplicant(id) {
  const applicant = applicants.find((a) => a.id === id);
  students.push({ ...applicant, project: null });
  applicants = applicants.filter((a) => a.id !== id);
  renderApplicants();
  renderStudents();
}

function rejectApplicant(id) {
  applicants = applicants.filter((a) => a.id !== id);
  renderApplicants();
}

// Render students
function renderStudents() {
  studentsList.innerHTML = "";
  students.forEach((student) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${student.name}</h3>
      <p><b>Assigned Project:</b> ${student.project || "None"}</p>
    `;
    studentsList.appendChild(card);
  });
}

// Render projects
function renderProjects() {
  projectsList.innerHTML = "";
  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "card";
    const select = document.createElement("select");

    // Options
    const defaultOpt = document.createElement("option");
    defaultOpt.textContent = "Assign to...";
    defaultOpt.disabled = true;
    defaultOpt.selected = true;
    select.appendChild(defaultOpt);

    students.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = s.name;
      select.appendChild(opt);
    });

    const button = document.createElement("button");
    button.textContent = "Assign";
    button.onclick = () => {
      const studentId = select.value;
      if (studentId) {
        const student = students.find((s) => s.id == studentId);
        student.project = proj.title;
        renderStudents();
      }
    };

    card.innerHTML = `<h3>${proj.title}</h3>`;
    card.appendChild(select);
    card.appendChild(button);
    projectsList.appendChild(card);
  });
}

// Auto-select top candidates
document.getElementById("autoSelectBtn").addEventListener("click", () => {
  const minWorkEthic = parseInt(document.getElementById("minWorkEthic").value);
  const mustBeWilling = document.getElementById("mustBeWilling").checked;

  const filtered = applicants.filter(
    (a) => a.workEthic >= minWorkEthic && (!mustBeWilling || a.willing)
  );

  filtered.forEach((a) => {
    students.push({ ...a, project: null });
  });
  applicants = applicants.filter((a) => !filtered.includes(a));
  renderApplicants();
  renderStudents();
});

// Initial render
renderProjects();
