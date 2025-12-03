import { Routes, Route } from "react-router-dom";
import { RecruiterHome } from "./recruiter/RecruiterHome";
import { SkillsPage } from "./recruiter/SkillsPage";
import { ProjectsPage } from "./recruiter/ProjectsPage";
import { AboutPage, ExperiencePage } from "./recruiter/AboutPage";

function Recruiter() {
  return (
    <Routes>
      <Route path="/" element={<RecruiterHome />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default Recruiter;
