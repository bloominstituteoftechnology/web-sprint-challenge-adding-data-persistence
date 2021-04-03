// build your `/api/tasks` router here

const router = require('express').Router()
const tasks = require('./model.js')

router.get('/', async (req, res, next) => {
    const allTasks = await tasks.getAll()
    res.status(200).json(allTasks)
});

router.post('/', async (req, res, next) => {
    if (!req.body) {
        res.status(400).json({ message: 'Please fill in feild.' })
    } else {
    const createdTask = await tasks.create(req.body)
    res.status(200).json(createdTask)
    }
});


module.exports = router;