import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProjectDetails from "./pages/ProjectDetails";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ProjectOverview from "./pages/ProjectOverview";
import Notifications from "./pages/Notifications";
import Sidebar from "./components/Sidebar";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import IndexPage from "./pages/IndexPage";
function PrivateRoute({ children }) {
  return localStorage.getItem("auth") ? children : <Navigate to="/home" />;
}

// Wrapper to show Sidebar on authenticated routes
function LayoutWithSidebar({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  const showSidebar =
    localStorage.getItem("auth") && !["/", "/home"].includes(location.pathname);

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/home" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/projects/:id"
            element={
              <PrivateRoute>
                <ProjectDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/overview"
            element={
              <PrivateRoute>
                <ProjectOverview />
              </PrivateRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/help"
            element={
              <PrivateRoute>
                <Help />
              </PrivateRoute>
            }
          />
          <Route
            path="/index"
            element={
              <PrivateRoute>
                <IndexPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
