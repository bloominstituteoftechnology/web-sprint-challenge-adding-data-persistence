// build your `/api/tasks` router here
const express = require('express');
const tasks = require('./model');

const router = express.Router()

router.post('/task', (req, res, next) => {
    tasks.createTask()
    .then(task => {
        res.status(201).json(task)
    })
    .catch(next)

})


router.get('/task', (req, res, next) => {
    tasks.getTask()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(next)
})

module.exports = router