import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axiosClient from "../../api/axiosClient";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";
import toast from "react-hot-toast";
import "./AboutPage.css";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState({
    fullName: "",
    summary: "",
    email: "",
    phone: "",
    location: "",
    socialLinks: {
      github: "",
      linkedin: "",
      portfolio: "",
      twitter: "",
    },
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      setLoading(true);
      const res = await axiosClient.get("/about");
      if (res.data?.data) {
        setAboutData(res.data.data);
      }
    } catch (error) {
      console.error("About data doesn't exist yet, will create on first save");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axiosClient.put("/about", aboutData);
      toast.success("About Me updated successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-main">
        <Topbar title="About Me" subtitle="Update your personal information" />
        <div className="admin-content">
          <div className="about-form-container">
            <Form onSubmit={handleSubmit} className="about-form">
              <h3>Personal Information</h3>

              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={aboutData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Summary</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="summary"
                  value={aboutData.summary}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="form-row">
                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={aboutData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={aboutData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={aboutData.location}
                  onChange={handleChange}
                />
              </Form.Group>

              <hr />

              <h3>Social Links</h3>

              <Form.Group className="mb-3">
                <Form.Label>GitHub</Form.Label>
                <Form.Control
                  type="url"
                  name="github"
                  value={aboutData.socialLinks.github}
                  onChange={handleSocialChange}
                  placeholder="https://github.com/username"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="url"
                  name="linkedin"
                  value={aboutData.socialLinks.linkedin}
                  onChange={handleSocialChange}
                  placeholder="https://linkedin.com/in/username"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Portfolio</Form.Label>
                <Form.Control
                  type="url"
                  name="portfolio"
                  value={aboutData.socialLinks.portfolio}
                  onChange={handleSocialChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="url"
                  name="twitter"
                  value={aboutData.socialLinks.twitter}
                  onChange={handleSocialChange}
                  placeholder="https://twitter.com/username"
                />
              </Form.Group>

              <div className="form-actions">
                <Button variant="primary" type="submit" disabled={loading} className="btn-save">
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
