// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

// curl -X GET http://localhost:5000/api/tasks
router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getAll();
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
})

// curl -d '{"task_description": "this is a description", "task_completed":false, "project_id": 2}' -H 'Content-Type: Application/json' -X POST http://localhost:5000/api/tasks
router.post('/', async (req, res, next) => {
    try {
        const task = await Task.insert(req.body);
        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
})


router.use((err, req, res, next) => {
    res.status(500).json({
        info: 'something happnede inside the router',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;