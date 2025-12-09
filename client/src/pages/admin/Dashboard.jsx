import { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import toast from "react-hot-toast";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
    skills: 0,
    projects: 0,
    experience: 0,
    lastUpdated: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [skillsRes, projectsRes, experienceRes] = await Promise.all([
        axiosClient.get("/skills"),
        axiosClient.get("/projects"),
        axiosClient.get("/experience"),
      ]);

      setStats({
        skills: skillsRes.data?.data?.length || 0,
        projects: projectsRes.data?.data?.length || 0,
        experience: experienceRes.data?.data?.length || 0,
        lastUpdated: new Date().toLocaleString(),
      });
    } catch (error) {
      toast.error("Failed to fetch statistics");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar title="Dashboard" subtitle="Overview of your portfolio" />
        <div className="admin-content">
          {loading ? (
            <div className="loading-state">
              <p>Loading statistics...</p>
            </div>
          ) : (
            <div className="stats-grid">
              <StatCard
                icon="⚡"
                label="Total Skills"
                value={stats.skills}
                color="#6f42c1"
              />
              <StatCard
                icon="🚀"
                label="Total Projects"
                value={stats.projects}
                color="#fd7e14"
              />
              <StatCard
                icon="💼"
                label="Total Experience"
                value={stats.experience}
                color="#17a2b8"
              />
              <StatCard
                icon="🕐"
                label="Last Updated"
                value={stats.lastUpdated}
                color="#28a745"
              />
            </div>
          )}

          <div className="dashboard-info">
            <div className="info-card">
              <h3>Welcome to Admin Panel</h3>
              <p>
                Manage your portfolio content from here. Use the sidebar to navigate through different sections like Skills, Projects, Experience, and About Me.
              </p>
              <ul>
                <li>✅ Add, edit, and delete your portfolio items</li>
                <li>✅ Reorder items by updating their position</li>
                <li>✅ All changes are saved to MongoDB in real-time</li>
                <li>✅ Frontend pages automatically fetch the latest data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <div className="stat-card" style={{ borderLeftColor: color }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
}
