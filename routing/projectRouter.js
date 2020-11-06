const express = require('express');
const Project = require('./projectModel');
const router = express.Router();
router.get('/resources', (req, res) => {
    Project.getResource()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Resources' });
        });
});
router.post('/resources', (req, res) => {
    Project.addResource(req.body)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project ' });
        });
});
router.get('/', (req, res) => {
    Project.getProjects(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Projects list' });
        });
});
router.get('/:id/tasks', (req, res) => {
    Project.getTasks(req.params.id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get task list' });
        });
});
router.get('/:id', (req, res) => {
    Project.getProjectById(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project ' });
        });
});
router.post('/', (req, res) => {
    Project.addProject(req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project ' });
        });
});
router.post('/:id/tasks', (req, res) => {
    const newTask = { project_id: req.params.id, ...req.body }
    Project.addTask(newTask)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to make new task ' });
        });
});
router.get('/:id/tasks', (req, res) => {
    Project.getTasks(req.params.id)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get task List' });
        });
});
module.exports = router;