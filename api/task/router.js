// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const { checkTask } = require('./middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const data = await Task.get()
    try {
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

router.post('/', checkTask, async (req, res, next) => {
    const data = await Task.create(req.body)
    try {
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

module.exports = router;