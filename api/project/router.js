// build your `/api/projects` router here
const router = require('express').Router()
const PM = require('./model')

// [GET] /api/projects
router.get('/', (req, res, next) => {
    PM.getAllProjects()
        .then(proj => {
            res.status(200).json(proj)
        })
})

// [POST] /api/projects
router.post('/', (req, res, next) => {
    PM.createProject(req.body)
      .then(newProject => {
        res.status(201).json({
          status: 201,
          project_id: newProject.project_id,
          project_name: newProject.project_name,
          project_description: newProject.project_description,
          project_completed: newProject.project_completed === 0 ? false : true
        })
      })
      .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
    })
})

module.exports = router;