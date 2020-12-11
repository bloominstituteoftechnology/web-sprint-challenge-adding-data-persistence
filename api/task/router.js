// build your `/api/tasks` router here

const express = require('express');

const Task = require('./model');

const router = express.Router();

router.get('/:id/tasks', (req, res) => {
    Task.getTasks(req.params.id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});
router.post('/:id/tasks', (req, res) => {
    const newTask = { project_id: req.params.id, ...req.body }
    Task.addTask(newTask)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: err.message});
        });
});

module.exports = router;