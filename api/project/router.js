// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const projects = await db.find();
    res.status(201).json(projects);
  } catch {
    res.status(500).json({ messege: "Server Error" });
  }
});

router.post("/", async (req, post) => {
  const newProject = req.body;
  try {
    const project = db.insert(newProject);
    res.status(201).json(project);
  } catch {
    res.status(500).json({ messege: "Server Error" });
  }
});

module.exports = router;
