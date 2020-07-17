const express = require("express");

const Schemes = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Schemes.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const newTask = req.body;

  Schemes.addTasks(newTask)
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add task" });
    });
});

module.exports = router;
