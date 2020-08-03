const express = require('express');
const db = require('./tasksModel.js');
const mapper = require('./mapper');
const { validateTaskBody } = require('./mapper');
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allTasks = await db.getTasks();
    res.json(allTasks);
  } catch (error) {
    next(error);
  }
});

router.post("/", validateTaskBody, async (req, res, next) => {
  try {
    const newTask = await db.insert(req.body);
    res.json(newTask);
  } catch (error) {
    next(error);
  }
});

  module.exports = router;