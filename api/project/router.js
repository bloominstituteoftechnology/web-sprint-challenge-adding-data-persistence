// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const project = req.body

    try {
        const newProject = await Project.addProject(project)
        const output = {
            project_id: newProject[0].project_id,
            project_name: newProject[0].project_name,
            project_description: newProject[0].project_description,
            project_completed: newProject[0].project_completed === 0 ? false : true,
        }
        res.status(201).json(output)
    } catch(err) {
        next(err)
    }
})

router.get("/:project_id", async (req, res, next) => {
    const { project_id } = req.params;
    console.log(req.query)

    try {
        const recipe = Project.getById(project_id);
        res.status(200).json(recipe)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Umnmm something happened and you should fix it',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router