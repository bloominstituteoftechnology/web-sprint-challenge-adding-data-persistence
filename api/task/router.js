// build your `/api/tasks` router here
const express = require('express')

const Task = require('./model')

const router = express.Router()

const checkName = (req, res, next) => {
    const { task_name, task_description } = req.body
    if (!task_name) {
        res.status(400).json({
            message: 'Task name is required'
        })
    }else if (!task_description) {
            res.status(400).json({
                message: 'Task description is required'
            })
        }else {
            next()
        }
}

router.post('/', checkName, (req, res, next) => {
    const newTask = req.body
    Task.create(newTask)
    .then((task) => {
        res.status(201).json(task)
    })
    .catch((err) => {
        next(err)
    })
})

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then((tasks) => {
        res.status(200).json(tasks)
    })
    .catch((err) => {
        next(err)
    })
})

module.exports = router