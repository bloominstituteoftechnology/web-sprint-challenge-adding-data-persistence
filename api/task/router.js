const express = require("express");
const Task = require("./model");
const router = express.Router();
//get all tasks
router.get("/", async (req, res, next) => {
  try {
    const data = await Task.getTasks();
    res.status(200).json(data);
  } catch (e) {
    next();
  }
});

//post a task
router.post("/", async (req, res, next) => {
  try {
    const data = await Task.postATask(req.body);
    res.status(201).json(data);
  } catch (e) {
    next();
  }
});

//error handler
router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
