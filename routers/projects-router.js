const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req,res) => {
    Projects.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({
                message:'Failed to get projects'
            });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            if (project) {
                res.status(project)
            } else {
                res.status(404).json({
                    message: 'Could not find project based on id'
                });
            }  
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get projects'
            });
        });     
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.add(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add project'
            });
        });
});

module.exports = router;