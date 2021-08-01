// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.getProject()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const project = req.body

    Projects.addProject(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router;