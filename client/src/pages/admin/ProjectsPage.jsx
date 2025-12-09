import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axiosClient from "../../api/axiosClient";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import ModalForm from "../../components/admin/ModalForm";
import toast from "react-hot-toast";
import "./SkillsPage.css";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axiosClient.get("/projects");
      setProjects(res.data?.data || []);
    } catch (error) {
      toast.error("Failed to fetch projects");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingId(null);
    setInitialData(null);
    setShowModal(true);
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setInitialData(project);
    setShowModal(true);
  };

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      if (editingId) {
        await axiosClient.put(`/projects/${editingId}`, formData);
        toast.success("Project updated successfully");
      } else {
        await axiosClient.post("/projects", formData);
        toast.success("Project added successfully");
      }
      setShowModal(false);
      fetchProjects();
    } catch (error) {
      toast.error(error.response?.data?.message || "Operation failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        setLoading(true);
        await axiosClient.delete(`/projects/${id}`);
        toast.success("Project deleted");
        fetchProjects();
      } catch (error) {
        toast.error("Failed to delete");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fields = [
    { name: "name", label: "Project Name", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea", required: false },
    { name: "technologies", label: "Technologies (comma-separated)", type: "textarea", required: false },
    { name: "projectLink", label: "Project Link", type: "text", required: false },
    { name: "githubLink", label: "GitHub Link", type: "text", required: false },
    { name: "imageUrl", label: "Image URL", type: "text", required: false },
  ];

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar title="Projects" subtitle="Manage your portfolio projects" />
        <div className="admin-content">
          <div className="content-header">
            <h2>All Projects ({projects.length})</h2>
            <Button onClick={handleAdd} className="btn-add" disabled={loading}>
              ➕ Add Project
            </Button>
          </div>

          {loading && projects.length === 0 ? (
            <div className="loading-state">Loading...</div>
          ) : projects.length === 0 ? (
            <div className="empty-state">
              <p>No projects yet. Click "Add Project" to get started.</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <Table hover>
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Technologies</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project._id}>
                      <td className="font-weight-bold">{project.name}</td>
                      <td>{project.technologies?.join(", ") || "-"}</td>
                      <td>{project.description?.substring(0, 50) || "-"}</td>
                      <td>
                        <Button size="sm" variant="outline-primary" onClick={() => handleEdit(project)} disabled={loading} className="me-2">
                          ✏️ Edit
                        </Button>
                        <Button size="sm" variant="outline-danger" onClick={() => handleDelete(project._id)} disabled={loading}>
                          🗑️ Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>

      <ModalForm
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        title={editingId ? "Edit Project" : "Add New Project"}
        fields={fields}
        initialData={initialData}
        loading={loading}
      />
    </div>
  );
}
