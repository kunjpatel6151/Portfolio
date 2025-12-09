import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
import Experience from "../models/Experience.js";
import AboutMe from "../models/AboutMe.js";

// ============================================
// PROJECTS CONTROLLERS
// ============================================

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addProject = async (req, res) => {
  try {
    const { name, technologies, description, projectLink, githubLink, imageUrl, order } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: "Project name is required" });
    }

    const newProject = new Project({
      name,
      technologies: technologies || [],
      description,
      projectLink,
      githubLink,
      imageUrl,
      order: order || 0,
    });

    await newProject.save();
    res.status(201).json({ success: true, data: newProject, message: "Project added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedProject = await Project.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedProject) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.status(200).json({ success: true, data: updatedProject, message: "Project updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.status(200).json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// SKILLS CONTROLLERS
// ============================================

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addSkill = async (req, res) => {
  try {
    const { name, description, level, order } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: "Skill name is required" });
    }

    const newSkill = new Skill({
      name,
      description,
      level: level || "intermediate",
      order: order || 0,
    });

    await newSkill.save();
    res.status(201).json({ success: true, data: newSkill, message: "Skill added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedSkill = await Skill.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedSkill) {
      return res.status(404).json({ success: false, message: "Skill not found" });
    }

    res.status(200).json({ success: true, data: updatedSkill, message: "Skill updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({ success: false, message: "Skill not found" });
    }

    res.status(200).json({ success: true, message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// EXPERIENCE CONTROLLERS
// ============================================

export const getAllExperience = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({ success: true, data: experience });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addExperience = async (req, res) => {
  try {
    const { companyName, role, duration, description, order } = req.body;

    if (!companyName || !role || !duration) {
      return res.status(400).json({ success: false, message: "Company name, role, and duration are required" });
    }

    const newExperience = new Experience({
      companyName,
      role,
      duration,
      description,
      order: order || 0,
    });

    await newExperience.save();
    res.status(201).json({ success: true, data: newExperience, message: "Experience added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedExperience = await Experience.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedExperience) {
      return res.status(404).json({ success: false, message: "Experience not found" });
    }

    res.status(200).json({ success: true, data: updatedExperience, message: "Experience updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExperience = await Experience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({ success: false, message: "Experience not found" });
    }

    res.status(200).json({ success: true, message: "Experience deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================
// ABOUT ME CONTROLLERS
// ============================================

export const getAboutMe = async (req, res) => {
  try {
    let aboutMe = await AboutMe.findOne();

    if (!aboutMe) {
      return res.status(404).json({ success: false, message: "About Me not found" });
    }

    res.status(200).json({ success: true, data: aboutMe });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateAboutMe = async (req, res) => {
  try {
    const { fullName, summary, email, phone, location, socialLinks } = req.body;

    let aboutMe = await AboutMe.findOne();

    if (!aboutMe) {
      // Create new AboutMe document if it doesn't exist
      aboutMe = new AboutMe({
        fullName,
        summary,
        email,
        phone,
        location,
        socialLinks,
      });
    } else {
      // Update existing document
      aboutMe.fullName = fullName || aboutMe.fullName;
      aboutMe.summary = summary || aboutMe.summary;
      aboutMe.email = email || aboutMe.email;
      aboutMe.phone = phone || aboutMe.phone;
      aboutMe.location = location || aboutMe.location;
      if (socialLinks) {
        aboutMe.socialLinks = { ...aboutMe.socialLinks, ...socialLinks };
      }
    }

    await aboutMe.save();
    res.status(200).json({ success: true, data: aboutMe, message: "About Me updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
