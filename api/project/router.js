const express = require('express')
const router = express.Router()
const Project = require('./model')


router.post('/', (req, res, next)=>{
    Project.insert(req.body)
        .then((project)=>{
            res.status(201).json({ ...project, task_completed: !! project.task_completed })
        })
        .catch(next)
})

router.get('/', (req, res, next)=>{
    Project.get()
        .then((project)=>{
            res.status(200).json(project)
        })
        .catch(next)
    })      

    module.exports = router
