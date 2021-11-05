const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then((projects) => {
            res.json(projects)
        })
        .catch(next)
})

module.exports = router
