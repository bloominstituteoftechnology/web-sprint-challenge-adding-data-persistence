// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
    const tasks = await Task.getAll();
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const task = await Task.insert(req.body);
        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
})


router.use((err, req, res) => {
    res.status(500).json({
        info: 'looks like there is a problem',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router; 