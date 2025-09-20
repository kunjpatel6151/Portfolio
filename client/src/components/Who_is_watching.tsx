import { useNavigate } from "react-router-dom";
import "../components/Who_is_watching.css";

// Import role images
import recruiterImg from "../assets/recruiter.png";
import developerImg from "../assets/developer.png";
import stalkerImg from "../assets/stalker.png";
import beginnerImg from "../assets/beginner.png";
import adminImg from "../assets/admin.png";

// Import background image
import bgImage from "../assets/background.jpg";

function WhoIsWatching() {
  const navigate = useNavigate();

  const roles = [
    { name: "Recruiter", path: "/recruiter", img: recruiterImg },
    { name: "Developer", path: "/developer", img: developerImg },
    { name: "Stalker", path: "/stalker", img: stalkerImg },
    { name: "Beginner", path: "/beginner", img: beginnerImg },
    { name: "Admin", path: "/admin", img: adminImg },
  ];

  return (
    <div
      className="who-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container text-center">
        <h1 className="mb-5 title-text">Who's Watching?</h1>
        <div className="row justify-content-center g-4">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              onClick={() => navigate(role.path)}
            >
              <div className="watch-card h-100">
                <img src={role.img} alt={role.name} className="role-img" />
                <p className="role-name">{role.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhoIsWatching;
