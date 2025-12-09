import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axiosClient from "../../api/axiosClient";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import ModalForm from "../../components/admin/ModalForm";
import toast from "react-hot-toast";
import "./SkillsPage.css";

export default function ExperiencePage() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    try {
      setLoading(true);
      const res = await axiosClient.get("/experience");
      setExperience(res.data?.data || []);
    } catch (error) {
      toast.error("Failed to fetch experience");
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

  const handleEdit = (exp) => {
    setEditingId(exp._id);
    setInitialData(exp);
    setShowModal(true);
  };

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      if (editingId) {
        await axiosClient.put(`/experience/${editingId}`, formData);
        toast.success("Experience updated");
      } else {
        await axiosClient.post("/experience", formData);
        toast.success("Experience added");
      }
      setShowModal(false);
      fetchExperience();
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
        await axiosClient.delete(`/experience/${id}`);
        toast.success("Experience deleted");
        fetchExperience();
      } catch (error) {
        toast.error("Failed to delete");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fields = [
    { name: "companyName", label: "Company Name", type: "text", required: true },
    { name: "role", label: "Role", type: "text", required: true },
    { name: "duration", label: "Duration", type: "text", required: true, placeholder: "e.g., Jan 2022 - Dec 2023" },
    { name: "description", label: "Description", type: "textarea", required: false },
  ];

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar title="Experience" subtitle="Manage your work experience" />
        <div className="admin-content">
          <div className="content-header">
            <h2>All Experience ({experience.length})</h2>
            <Button onClick={handleAdd} className="btn-add" disabled={loading}>
              ➕ Add Experience
            </Button>
          </div>

          {loading && experience.length === 0 ? (
            <div className="loading-state">Loading...</div>
          ) : experience.length === 0 ? (
            <div className="empty-state">
              <p>No experience yet. Click "Add Experience" to get started.</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <Table hover>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Duration</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {experience.map((exp) => (
                    <tr key={exp._id}>
                      <td className="font-weight-bold">{exp.companyName}</td>
                      <td>{exp.role}</td>
                      <td>{exp.duration}</td>
                      <td>
                        <Button size="sm" variant="outline-primary" onClick={() => handleEdit(exp)} disabled={loading} className="me-2">
                          ✏️ Edit
                        </Button>
                        <Button size="sm" variant="outline-danger" onClick={() => handleDelete(exp._id)} disabled={loading}>
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
        title={editingId ? "Edit Experience" : "Add New Experience"}
        fields={fields}
        initialData={initialData}
        loading={loading}
      />
    </div>
  );
}
