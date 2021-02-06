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

router.post("/", async (req, post) => {
  const newTask = req.body;
  try {
    const task = db.insert(newTask);
    res.status(201).json(resource);
  } catch {
    res.status(500).json({ messege: "Server Error" });
  }
});

module.exports = router;
