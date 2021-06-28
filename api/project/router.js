// build your `/api/projects` router here
const express = require('express');
const projects = require('./model');

const router = express.Router()

router.post('/project', (req, res, next) => {
    projects.createProject(req.project)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

router.get('/project', (req, res, next) => {
    projects.getProject()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

module.exports = router