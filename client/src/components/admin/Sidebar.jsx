import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Sidebar.css";

export default function Sidebar() {
  const { logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Portfolio Admin</h2>
      </div>

      <nav className="sidebar-nav">
        <Link
          to="/admin/dashboard"
          className={`nav-item ${isActive("/admin/dashboard") ? "active" : ""}`}
        >
          📊 Dashboard
        </Link>
        <Link
          to="/admin/skills"
          className={`nav-item ${isActive("/admin/skills") ? "active" : ""}`}
        >
          ⚡ Skills
        </Link>
        <Link
          to="/admin/projects"
          className={`nav-item ${isActive("/admin/projects") ? "active" : ""}`}
        >
          🚀 Projects
        </Link>
        <Link
          to="/admin/experience"
          className={`nav-item ${isActive("/admin/experience") ? "active" : ""}`}
        >
          💼 Experience
        </Link>
        <Link
          to="/admin/about"
          className={`nav-item ${isActive("/admin/about") ? "active" : ""}`}
        >
          👤 About Me
        </Link>
      </nav>

      <div className="sidebar-footer">
        <button onClick={logout} className="logout-btn">
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
