const express = require("express");
const db = require("../data/db-config");
const tasksModel = require("./tasks-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await db("tasks");
    if (tasks) {
      res.status(200).json(tasks);
    }
  } catch (err) {
    res.status(500).json({
      message: "There was a server error fulfilling your request"
    });
  };
});

router.get("/:id", async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const task = await db("tasks").where({
      id
    });

    if (task) {
      res.status(200).json(task)
    } else {
      res.status(500).json({
        message: "There was a server error fulfilling your request"
      });
    };
  } catch (err) {
    res.status(404).json({
      message: `Task with id '${id}' does not exist`
    });
  };
});

router.get("/:id/task", async (req, res) => {
  const {
    id
  } = req.params
  try {
    const task = await tasksModel.findTasks(id);

    if (task) {
      res.status(200).json(task);
    } else {
      res.status(500).json({
        message: "There was a server error fulfilling your request"
      })
    }
  } catch (err) {
    res.status(400).json({
      message: `Task with id '${id}' does not exist`
    })
  };
})

router.post("/", async (req, res) => {
  const newTask = req.body;
  try {
    const addTask = await db("tasks").insert(newTask)

    if (addTask) {
      res.status(201).json(addTask);
    } else {
      res.status(500).json({
        message: "There was a server error fulfilling your request"
      })
    }
  } catch (err) {
    res.status(400).json({
      message: "Please provide the project id, the task name, and a task description"
    })
  };
});

module.exports = router;