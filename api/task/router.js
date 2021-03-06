// build your `/api/tasks` router here
const express = require("express")
const {getTasks, addTask} = require("./model")

const taskRouter = express.Router()

taskRouter.get("/api/tasks", (req, res, next) => {
    getTasks()
    .then(list => res.json(list))
    .catch(next)
})

taskRouter.post("/api/tasks", (req, res, next) => {
    addTask(req.body)
    .then(newTask => res.json(newTask))
    .catch(next)
})

module.exports = taskRouter