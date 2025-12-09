import express from "express";
import {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
  getAllSkills,
  addSkill,
  updateSkill,
  deleteSkill,
  getAllExperience,
  addExperience,
  updateExperience,
  deleteExperience,
  getAboutMe,
  updateAboutMe,
} from "./admin.controller.js";

const router = express.Router();

/**
 * PROJECTS CRUD ROUTES
 */
router.get("/projects", getAllProjects);
router.post("/projects", addProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

/**
 * SKILLS CRUD ROUTES
 */
router.get("/skills", getAllSkills);
router.post("/skills", addSkill);
router.put("/skills/:id", updateSkill);
router.delete("/skills/:id", deleteSkill);

/**
 * EXPERIENCE CRUD ROUTES
 */
router.get("/experience", getAllExperience);
router.post("/experience", addExperience);
router.put("/experience/:id", updateExperience);
router.delete("/experience/:id", deleteExperience);

/**
 * ABOUT ME CRUD ROUTES
 */
router.get("/about", getAboutMe);
router.put("/about", updateAboutMe);

export default router;
