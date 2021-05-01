// build your `/api/projects` router here

const express = require('express');
const Projects = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getAllProjects()
        .then( projects => {
            res.status(200).json(projects);
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const proj = req.body;
    Projects.createProject(proj)
        .then( proj => {
            res.status(201).json(proj)
        })
        .catch(next)
});

module.exports = router;