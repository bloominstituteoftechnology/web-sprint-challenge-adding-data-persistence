const express = require('express');
const db = require('./projectsModel.js');
const mapper = require('./mapper');
const { validateProjectBody } = require('./mapper');
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allProjects = await db.getProjects();
    res.json(allProjects);
  } catch (error) {
    next(error);
  }
});

router.post("/", validateProjectBody, async (req, res, next) => {
  try {
    const newProject = await db.insert(req.body);
    res.json(newProject);
  } catch (error) {
    next(error);
  }
});

  module.exports = router;