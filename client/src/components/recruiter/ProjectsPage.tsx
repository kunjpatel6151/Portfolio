import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../../styles/recruiter.css";

export function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="recruiter-container">
      <Navbar />
      <div className="recruiter-content">
        <div style={{ padding: "50px", minHeight: "60vh" }}>
          <h1 style={{ color: "#E50914", marginBottom: "30px" }}>
            My Projects
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Coming soon! This section will showcase my best projects and
            accomplishments.
          </p>
          <button
            onClick={() => navigate("/recruiter")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#E50914",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
