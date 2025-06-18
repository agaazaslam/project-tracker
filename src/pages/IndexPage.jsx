// Home.jsx
import {
  BriefcaseBusiness,
  CalendarDays,
  BellRing,
  UserRound,
  MessageSquareText,
  LayoutDashboard,
  FileText,
  LifeBuoy,
} from "lucide-react";

export default function IndexPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-box p-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Project Tracker </h1>
            <p className="py-6 text-base-content/70">
              Stay on top of your projects, milestones, chats, and documents all
              in one place. Obscura keeps everything organized so you can focus
              on progress.
            </p>
            <button className="btn-primary">View Your Dashboard</button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="btn btn-outline justify-start gap-2">
          <LayoutDashboard className="w-5 h-5" /> Dashboard
        </button>
        <button className="btn btn-outline justify-start gap-2">
          <BriefcaseBusiness className="w-5 h-5" /> Projects
        </button>
        <button className="btn btn-outline justify-start gap-2">
          <MessageSquareText className="w-5 h-5" /> Chat
        </button>
        <button className="btn btn-outline justify-start gap-2">
          <FileText className="w-5 h-5" /> Documents
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats bg-primary text-primary-content shadow">
          <div className="stat">
            <div className="stat-title font-bold text-white/80">
              Active Projects
            </div>
            <div className="stat-value text-white">3</div>
          </div>
        </div>
        <div className="stats bg-accent text-accent-content shadow text-white/80">
          <div className="stat">
            <div className="stat-title">Upcoming Deadlines</div>
            <div className="stat-value">2</div>
          </div>
        </div>
        <div className="stats bg-base-200 shadow">
          <div className="stat">
            <div className="stat-title">Unread Notifications</div>
            <div className="stat-value">5</div>
          </div>
        </div>
      </div>

      {/* Timeline Overview */}
      <div className="bg-base-100 rounded-box p-6">
        <h2 className="text-xl font-bold mb-4">🗓 Project Timeline</h2>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start">April 2024</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Kickoff Meeting</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">May 2024</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              Initial Design Review
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">June 2024</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">MVP Development</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">July 2024</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Final Launch</div>
          </li>
        </ul>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        <div className="card bg-base-200 p-4">
          <UserRound className="w-5 h-5 mb-2" />
          <p className="font-semibold">Your Profile</p>
        </div>
        <div className="card bg-base-200 p-4">
          <BellRing className="w-5 h-5 mb-2" />
          <p className="font-semibold">Notifications</p>
        </div>
        <div className="card bg-base-200 p-4">
          <CalendarDays className="w-5 h-5 mb-2" />
          <p className="font-semibold">Calendar</p>
        </div>
        <div className="card bg-base-200 p-4">
          <LifeBuoy className="w-5 h-5 mb-2" />
          <p className="font-semibold">Help & Support</p>
        </div>
      </div>
    </div>
  );
}
