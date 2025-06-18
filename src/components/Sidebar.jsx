import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, LogOut, Users } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-base-200 min-h-screen p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-primary p-5 bg-primary text-white rounded-xl">
        Project Tracker
      </h2>

      <ul className="menu space-y-2">
        <li>
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 p-3 rounded-lg ${
              isActive("/dashboard")
                ? "bg-primary text-white"
                : "hover:bg-base-300"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/chat"
            className={`flex items-center gap-3 p-3 rounded-lg ${
              isActive("/chat") ? "bg-primary text-white" : "hover:bg-base-300"
            }`}
          >
            <User className="w-5 h-5" />
            Chat
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={`flex items-center gap-3 p-3 rounded-lg ${
              isActive("/profile")
                ? "bg-primary text-white"
                : "hover:bg-base-300"
            }`}
          >
            <User className="w-5 h-5" />
            Profile
          </Link>
        </li>

        <li className="mt-6 border-t border-base-300 pt-4">
          <Link
            to="/home"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-error text-error-content hover:text-white hover:bg-error"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}
