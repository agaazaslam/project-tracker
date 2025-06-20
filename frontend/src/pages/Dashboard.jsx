import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Plus, ClipboardList } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Revamp the company website with a modern UI/UX.",
      status: "In Progress",
      createdAt: "2025-06-01",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Developing a cross-platform mobile application.",
      status: "Completed",
      createdAt: "2025-05-10",
    },
  ]);

  const [newProject, setNewProject] = useState({ name: "", description: "" });

  const addProject = () => {
    if (newProject.name.trim() && newProject.description.trim()) {
      setProjects([
        ...projects,
        {
          id: projects.length + 1,
          ...newProject,
          status: "In Progress",
          createdAt: new Date().toISOString().split("T")[0],
        },
      ]);
      setNewProject({ name: "", description: "" });
    }
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="flex">
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-primary">
          <ClipboardList className="w-6 h-6" />
          Project Dashboard
        </h1>

        {/* Add Project Form */}
        <div className="bg-base-200 p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Add New Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <input
              type="text"
              placeholder="Project Name"
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              className="input input-bordered w-full"
            />
            <button onClick={addProject} className="btn btn-primary w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </button>
          </div>
        </div>

        {/* Project List */}
        {projects.length === 0 ? (
          <div className="text-center text-gray-400">
            No projects yet. Start by adding one!
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDelete={deleteProject}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
