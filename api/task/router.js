// build your `/api/tasks` router here

const express = require("express");
const Task = require("./model");
const router = express.Router();

const validateTask = (req, res, next) => {
  const task = req.body;

  if (!task.Description && !validateTask.Completed) {
    res.status(500).json({ message: "Missing required Information!" });
  } else {
    req.task = task;
    next();
  }
};

router.get("/", async (req, res) => {
  try {
    const task = await Task.getAll();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ Message: err.Message });
  }
});
router.post("/", validateTask, async (req, res) => {
  try {
    Task.addtask(req.task);
    res.status(201).json(req.task);
  } catch (err) {
    res.status(500).json({ Message: err.Message });
  }
});

module.exports = router;