// build your `/api/projects` router here
const express = require('express');
const projects = require('./model');

const router = express.Router()

router.post('/projects', (req, res, next) => {
    projects.createResources()
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

router.get('/projects', (req, res, next) => {
    projects.getResouces()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

module.exports = router