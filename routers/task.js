const express = require("express")
const task = require("../models/task")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
    try {
        const tasks = await task.getTasks()
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})

router.post('/task', (req, res) => {
    const taskData = req.body;

    task.addTask(taskData)
        .then(task => {
        res.status(201).json(task);
    })
        .catch (err => {
        res.status(500).json({ message: 'Failed to create new task' });
    });
})

module.exports = router