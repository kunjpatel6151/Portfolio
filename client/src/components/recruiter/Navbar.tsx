import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="recruiter-navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Kunj Patel</span>
      </div>
      <div className="navbar-right">
        <Link to="/recruiter" className="nav-link">
          Home
        </Link>
        <Link to="/recruiter/skills" className="nav-link">
          Skills
        </Link>
        <Link to="/recruiter/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/recruiter/experience" className="nav-link">
          Experience
        </Link>
        <Link to="/recruiter/about" className="nav-link">
          About Me
        </Link>
      </div>
    </nav>
  );
}
