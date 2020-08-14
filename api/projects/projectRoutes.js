const express = require('express');
const router = express.Router();
const Projects = require('./projectModel');

router.get('/', (req, res) => {
    Projects.retrieveProjects().then( projects => {
        res.status(200).json({projects});
    });
});

router.get('/:id', (req, res) => {
    Projects.retrieveProjectById(req.params.id).then( project => {
        res.status(200).json(project);
    });
});

router.get('/:id/tasks', (req, res) => {
    Projects.retrieveProjectTasks(req.params.id).then( tasks => {
        res.status(200).json({tasks});
    });
});

router.post('/', (req, res) => {
    Projects.addProject(req.body).then(project => {
        res.status(201).json({project});
    }).catch( err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
