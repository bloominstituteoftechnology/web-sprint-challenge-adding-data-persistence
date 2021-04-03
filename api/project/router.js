// build your `/api/projects` router here


const router = require('express').Router()
const projects = require('./model.js')

router.get('/', async (req, res, next) => {
    const allProjects = await projects.getAll()
    res.status(200).json(allProjects)
});

router.post('/', async (req, res, next) => {
    if (!req.body) {
        res.status(400).json({ message: 'Fields left empty.' })
    } else if (!req.body.project_name) {
        res.status(400).json({ message: 'name required' })
    } else {
    const createdProject = await projects.create(req.body)
    res.status(200).json(createdProject)
    }
});


module.exports = router;