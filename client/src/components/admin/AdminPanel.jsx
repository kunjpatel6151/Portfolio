import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Login from "../../pages/admin/Login";
import Dashboard from "../../pages/admin/Dashboard";
import SkillsPage from "../../pages/admin/SkillsPage";
import ProjectsPage from "../../pages/admin/ProjectsPage";
import ExperiencePage from "../../pages/admin/ExperiencePage";
import AboutPage from "../../pages/admin/AboutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminPanel.css";

export default function AdminPanel() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <div className="loading-page">Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}
