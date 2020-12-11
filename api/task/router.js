// build your `/api/tasks` router here
const express = require("express");
const Helper = require("./task-model");
const router = express.Router();

const validateTask = (req, res, next) => {
  const task = req.body;

  if (!task.Description && !validateTask.Completed) {
    res.status(500).json({ message: "Missing required Fields." });
  } else {
    req.task = task;
    next();
  }
};

router.get("/", async (req, res) => {
  try {
    const task = await Helper.getAll();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});
router.post("/", validateTask, async (req, res) => {
  try {
    Helper.addtask(req.task);
    res.status(201).json(req.task);
  } catch (error) {
    res.status(500).json({ Message: error.Message });
  }
});

module.exports = router;
