// AppLayout.jsx
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-base-100">
        <Outlet />
      </main>
    </div>
  );
}
