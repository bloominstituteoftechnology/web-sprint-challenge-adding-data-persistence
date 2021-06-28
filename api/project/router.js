// build your `/api/projects` router here
const express = require('express');
const projects = require('./model');

const router = express.Router()

router.post('/project', (req, res, next) => {
    projects.createProject()
    .then(project => {
        res.status(201).json(project)
    })
    .catProject
})

router.get('/project', (req, res, next) => {
    projects.getProject()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

module.exports = router