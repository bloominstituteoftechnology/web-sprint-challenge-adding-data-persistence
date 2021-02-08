// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const tasks = await db.find();
    res.status(201).json(tasks);
  } catch {
    res.status(500).json({ messege: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const task = await db.findById(id);
    console.log(task);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ messege: "Error" });
  }
});

router.post("/", async (req, res) => {
  const newTask = req.body;
  try {
    const task = await db.insert(newTask);
    res.status(201).json(task);
  } catch {
    res.status(500).json({ messege: "Server error" });
  }
});

module.exports = router;
