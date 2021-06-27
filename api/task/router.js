// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");
const router = express.Router();

router.get("/", (req, res) => {
    Task.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        error.status(500).json({ message: error.message })
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Task.findTaskById(id)
    .then(task => {
        if(!task){
            res.status(404).json("Sorry the task with the specified id could not be found.")
        } else {
            res.json(task)
        }
    })
    .catch(error => {
        res.status(500).json({ message: error })
    })
})


router.post('/', (req, res) => {
    const task = req.body
    Task.addTask(task)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(error => {
        error.status(500).json({ message: error.message })
    })
})

module.exports = router;