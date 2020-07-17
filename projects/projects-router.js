const express = require("express");

const Schemes = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Schemes.getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;

  Schemes.addProjects(newProject)
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add project" });
    });
});

module.exports = router;
