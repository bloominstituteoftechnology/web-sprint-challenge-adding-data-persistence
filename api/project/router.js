// build your `/api/projects` router here

const express = require("express");
const Project = require("./model");
const router = express.Router();


const validateProject = (req, res, next) => {
  const project = req.body;
  if (!project.Name && !project.Completed) {
    res.status(400).json({ message: "Missing required information" });
  } else {
    req.project = project;
    next();
  }
};
router.get("/", async (req, res) => {
  try {
    let projects = await Project.getAll();
    projects.forEach((project) => {
        if (project.Completed === 0) {
            project.Completed = false;
        } else {
            project.Completed = true;
      }
    });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});
router.post("/", validateProject, async (req, res) => {
  try {
    const newProject = await Project.addProject(req.project);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});
module.exports = router;