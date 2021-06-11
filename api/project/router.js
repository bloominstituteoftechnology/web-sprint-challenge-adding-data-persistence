// build your `/api/projects` router here
const express = require('express')

const Projects = require('./model')

const router = express.Router()

const checkName = (req, res, next) => {
    const { project_name } = req.body
    if (!project_name) {
        res.status(400).json({
            message: 'Project name is required'
        })
    }else {
        next()
    }
}

router.post('/', checkName, async (req, res, next) => {
    try {
        const newProject = await Projects.create(req.body)
        res.json(newProject)
    }
    catch(err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const project = await Projects.getProjects
        res.json(project)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router