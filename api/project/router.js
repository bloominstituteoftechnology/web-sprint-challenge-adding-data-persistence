// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const projects = await db.find();
    res.json(projects);
  } catch (err) {
    res
      .status(500)
      .json({ message: "The projects information could not be retrieved" });
  }
});

router.post("/", async (req, res, next) => {
  const project = req.body;

  try {
    const newProject = await db.add(project);
    const output = {
      project_id: newProject[0].project_id,
      project_name: newProject[0].project_name,
      project_description: newProject[0].project_description,
      project_completed: newProject[0].project_completed === 0 ? false : true,
    };
    res.status(201).json(output);
  } catch (err) {
    next(err);
  }
});

router.get("/:project_id", async (req, res, next) => {
  const { project_id } = req.params;
  console.log(req.query);

  try {
    const recipe = db.getById(project_id);
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
