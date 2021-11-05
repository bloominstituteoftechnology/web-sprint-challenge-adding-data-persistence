const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks)
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const task = await Task.insert(req.body);
        res.status(201).json(task);
    } catch  (err) {
        next(err);
    }
});

module.exports = router
