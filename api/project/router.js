const express = require("express");
const Project = require("./model");
const router = express.Router();

//Grab all projects
router.get("/", async (req, res, next) => {
  try {
    const data = await Project.getAllProjects();
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
});

//Posting a project to the projects db
router.post("/", async (req, res, next) => {
  try {
    const { project_name, project_completed } = req.body;
    if (!project_name || !project_completed) {
      res
        .status(404)
        .json({ message: "Project name and Project completed required" });
    } else {
      const data = await Project.postProject(req.body);
      res.status(201).json(data);
    }
  } catch (e) {
    next(e);
  }
});

//error handler
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
