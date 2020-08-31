const express = require("express");
const db = require("../data/config");
const Tasks = require("./tasks-model")
const router = express.Router();

router.post("/tasks", async (req,res,next)=>{
const TaskBody = req.body

Tasks.add(TaskBody)
.then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
})

router.get("/tasks", (req,res,next)=>{
    Tasks.FindTasks()
    .then(tasks => {
        res.status(200).json({tasks});
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to find task' });
      });
})


module.exports = router;