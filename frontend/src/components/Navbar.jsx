import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FolderKanban, Moon, MoonIcon, Sun } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div
      className={`p-4 flex justify-between items-center navbar bg-base-100 fixed top-0 w-full z-50 shadow-md ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-xl flex gap-2">
        <FolderKanban /> Project Tracker{" "}
      </h1>
      <div className="flex justify-between items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded mr-4"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>

        <button
          className="bg-primary-200 px-4 py-1 rounded hover:bg-red-700"
          onClick={handleLogout}
        >
          Login
        </button>
      </div>
    </div>
  );
}
