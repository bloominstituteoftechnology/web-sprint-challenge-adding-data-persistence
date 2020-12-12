const router = require('express').Router();
const Project = require('./model');

router.post('/task', (req, res) => {
    Project.addTask(req.body)
        .then((newTask) => {
            res.status(200).json(newTask);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.get('/tasks', (req, res) => {
    Project.taskList()
        .then((tasks) => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;