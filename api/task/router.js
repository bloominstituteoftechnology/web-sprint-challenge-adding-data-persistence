const express = require('express')
const Tasks = require('./model')
const router = express.Router()

// [GET] /api/tasks
router.get('/', (req, res, next) => {
    Tasks.getAll()
        .then((task) => {
            res.status(200).json(task)
        })
        .catch(next)
})

// [POST] /api/tasks

module.exports = router