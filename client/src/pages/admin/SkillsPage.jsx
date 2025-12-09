import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axiosClient from "../../api/axiosClient";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import ModalForm from "../../components/admin/ModalForm";
import toast from "react-hot-toast";
import "./SkillsPage.css";

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const res = await axiosClient.get("/skills");
      setSkills(res.data?.data || []);
    } catch (error) {
      toast.error("Failed to fetch skills");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSkill = () => {
    setEditingId(null);
    setInitialData(null);
    setShowModal(true);
  };

  const handleEditSkill = (skill) => {
    setEditingId(skill._id);
    setInitialData(skill);
    setShowModal(true);
  };

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      if (editingId) {
        await axiosClient.put(`/skills/${editingId}`, formData);
        toast.success("Skill updated successfully");
      } else {
        await axiosClient.post("/skills", formData);
        toast.success("Skill added successfully");
      }
      setShowModal(false);
      fetchSkills();
    } catch (error) {
      toast.error(error.response?.data?.message || "Operation failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      try {
        setLoading(true);
        await axiosClient.delete(`/skills/${id}`);
        toast.success("Skill deleted successfully");
        fetchSkills();
      } catch (error) {
        toast.error("Failed to delete skill");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const skillFields = [
    { name: "name", label: "Skill Name", type: "text", required: true, placeholder: "e.g., React" },
    { name: "description", label: "Description", type: "textarea", required: false, placeholder: "Optional description" },
    { name: "level", label: "Level", type: "select", required: false, options: ["beginner", "intermediate", "advanced"] },
  ];

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar title="Skills" subtitle="Manage your technical skills" />
        <div className="admin-content">
          <div className="content-header">
            <h2>All Skills ({skills.length})</h2>
            <Button onClick={handleAddSkill} className="btn-add" disabled={loading}>
              ➕ Add Skill
            </Button>
          </div>

          {loading && skills.length === 0 ? (
            <div className="loading-state">Loading...</div>
          ) : skills.length === 0 ? (
            <div className="empty-state">
              <p>No skills yet. Click "Add Skill" to get started.</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <Table hover>
                <thead>
                  <tr>
                    <th>Skill Name</th>
                    <th>Level</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill) => (
                    <tr key={skill._id}>
                      <td className="font-weight-bold">{skill.name}</td>
                      <td>
                        <span className={`badge level-${skill.level}`}>
                          {skill.level}
                        </span>
                      </td>
                      <td>{skill.description || "-"}</td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={() => handleEditSkill(skill)}
                          disabled={loading}
                          className="me-2"
                        >
                          ✏️ Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => handleDelete(skill._id)}
                          disabled={loading}
                        >
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
        title={editingId ? "Edit Skill" : "Add New Skill"}
        fields={skillFields}
        initialData={initialData}
        loading={loading}
      />
    </div>
  );
}
