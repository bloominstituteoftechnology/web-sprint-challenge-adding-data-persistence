// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Projects = require('./model')

router.post('/', (req, res) => {
    if (!req.body.project_name){
        res.status(400).json({message: 'Request body missing required field(s)'})
    } else {
    Projects.insert(req.body)
        .then(project => {
            res.json(project)
        })
}
})

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.json(projects)
        })
})
module.exports = router