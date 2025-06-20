import { useParams } from "react-router-dom";

const projectData = {
  1: {
    name: "Website Redesign",
    description: "Revamp the company website with a modern UI/UX.",
    status: "In Progress",
    progress: 60,
    milestones: [
      { title: "Wireframes", status: "Completed", due: "March 10, 2025" },
      { title: "UI Design", status: "In Progress", due: "March 25, 2025" },
      { title: "Development", status: "Pending", due: "April 15, 2025" },
    ],
    files: [
      { name: "Design Brief.pdf", link: "#" },
      { name: "Prototype.fig", link: "#" },
    ],
  },
  2: {
    name: "Mobile App Development",
    description: "Developing a cross-platform mobile application.",
    status: "Completed",
    progress: 100,
    milestones: [
      { title: "App Design", status: "Completed", due: "Feb 20, 2025" },
      { title: "Backend API", status: "Completed", due: "March 10, 2025" },
      { title: "Launch", status: "Completed", due: "March 30, 2025" },
    ],
    files: [{ name: "Final Report.pdf", link: "#" }],
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl text-red-500">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">{project.name}</h2>
          <p className="text-gray-400">{project.description}</p>

          {/* Status & Progress */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Status:</span>
              <div
                className={`badge ${
                  project.status === "Completed"
                    ? "badge-success"
                    : project.status === "In Progress"
                    ? "badge-warning"
                    : "badge-neutral"
                }`}
              >
                {project.status}
              </div>
            </div>

            <div className="mt-2">
              <span className="font-semibold">Progress:</span>
              <progress
                className="progress progress-primary w-full mt-1"
                value={project.progress}
                max="100"
              ></progress>
              <span className="text-sm text-right block text-gray-400">
                {project.progress}% Complete
              </span>
            </div>
          </div>

          {/* Milestones */}
          <div className="mt-6">
            <h3 className="text-xl font-bold">Milestones</h3>
            <ul className="mt-2 space-y-2">
              {project.milestones.map((milestone, index) => (
                <li
                  key={index}
                  className="border border-base-300 rounded-lg p-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{milestone.title}</span>
                    <span
                      className={`badge ${
                        milestone.status === "Completed"
                          ? "badge-success"
                          : milestone.status === "In Progress"
                          ? "badge-warning"
                          : "badge-ghost"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Due: {milestone.due}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Files */}
          <div className="mt-6">
            <h3 className="text-xl font-bold">Files</h3>
            <ul className="mt-2 space-y-2">
              {project.files.map((file, index) => (
                <li key={index}>
                  <a href={file.link} className="link link-primary">
                    📎 {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
