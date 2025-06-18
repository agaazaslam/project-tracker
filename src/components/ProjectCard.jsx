import { Trash2, Calendar, FolderKanban, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function ProjectCard({ project, onDelete }) {
  const statusColor = {
    "In Progress": "badge-warning",
    Completed: "badge-success",
    "On Hold": "badge-neutral",
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300">
      <div className="card-body">
        {/* Project Title */}
        <h2 className="card-title text-lg font-semibold text-primary">
          <FolderKanban className="w-5 h-5 text-primary" />
          {project.name}
        </h2>
        <Link
          to={`/projects/${project.id}`}
          className="btn btn-sm btn-outline btn-primary flex items-center gap-1"
        >
          View
          <ArrowRight size={16} />
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-400">{project.description}</p>

        {/* Metadata */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{project.createdAt}</span>
          </div>
          <div
            className={`badge ${statusColor[project.status] || "badge-ghost"}`}
          >
            {project.status}
          </div>
        </div>

        {/* Actions */}
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-sm btn-outline btn-error hover:btn-error"
            onClick={() => onDelete(project.id)}
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
