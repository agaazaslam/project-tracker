import {
  CheckCircle,
  Hammer,
  ClipboardList,
  FileText,
  MessageCircle,
  Rocket,
} from "lucide-react";

export default function ProjectOverview() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
      <div className="stats shadow w-full mb-4">
        <div className="stat">
          <div className="stat-title">Status</div>
          <div className="stat-value text-info">In Progress</div>
        </div>
        <div className="stat">
          <div className="stat-title">Milestones</div>
          <div className="stat-value">5/10</div>
        </div>
        <div className="stat">
          <div className="stat-title">Team Members</div>
          <div className="stat-value">4</div>
        </div>
      </div>

      <div className="card bg-base-200 p-4">
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">
              <h3 className="font-semibold">📌 Project Initiation</h3>
              <p>
                Initial client meetings, gathering broad requirements, and
                defining scope.
              </p>
              <p className="text-sm text-gray-400 mt-1">Jan 5, 2024</p>
            </div>
            <div className="timeline-middle">
              <CheckCircle className="text-primary h-5 w-5" />
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <ClipboardList className="text-primary h-5 w-5" />
            </div>
            <div className="timeline-end timeline-box">
              <h3 className="font-semibold">📋 Requirements Finalized</h3>
              <p>
                Gathered feature list: Dashboard, Milestones, Chat,
                Notifications, File Uploads.
              </p>
              <p className="text-sm text-gray-400 mt-1">Jan 18, 2024</p>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">
              <h3 className="font-semibold">🎨 UI/UX Design</h3>
              <p>
                Wireframes and prototypes built using Figma. Client approved
                final mockups.
              </p>
              <p className="text-sm text-gray-400 mt-1">Feb 1, 2024</p>
            </div>
            <div className="timeline-middle">
              <FileText className="text-primary h-5 w-5" />
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <Hammer className="text-primary h-5 w-5" />
            </div>
            <div className="timeline-end timeline-box">
              <h3 className="font-semibold">🛠️ Frontend Development</h3>
              <p>
                Built with React, Tailwind, DaisyUI. Components: Dashboard,
                Chat, Milestones.
              </p>
              <p className="text-sm text-gray-400 mt-1">Feb–Mar 2024</p>
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">
              <h3 className="font-semibold">💬 Real-time Messaging</h3>
              <p>
                WebSocket-based chat system implemented for instant
                communication.
              </p>
              <p className="text-sm text-gray-400 mt-1">Apr 2024</p>
            </div>
            <div className="timeline-middle">
              <MessageCircle className="text-primary h-5 w-5" />
            </div>
            <hr className="bg-primary" />
          </li>

          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <Rocket className="text-primary h-5 w-5" />
            </div>
            <div className="timeline-end timeline-box">
              <h3 className="font-semibold">🚀 Final Testing & Deployment</h3>
              <p>
                All bugs fixed. App deployed on Vercel. Backend integration
                underway.
              </p>
              <p className="text-sm text-gray-400 mt-1">May 2024</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
