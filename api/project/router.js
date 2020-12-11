// build your `/api/projects` router here
const express = require('express')

const ProjectModel = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    ProjectModel.getProjects(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});
router.get('/:id', (req, res) => {
    ProjectModel.getProjectById(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});
router.post('/', (req, res) => {
    ProjectModel.addProject(req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: err.message});
        });
});

module.exports = router;