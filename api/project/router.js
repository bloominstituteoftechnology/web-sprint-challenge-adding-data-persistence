// build your `/api/projects` router here
const express = require('express');

const Projects = require('./model.js');

const router = express.Router();

router.get('/', (req,res,next) => {
    Projects.getAll()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => next(err))
});

router.get('/:id', (req,res,next) =>{
    Projects.getById(req.params.id)
        .then(project =>{
            res.status(200).json(project)
        })
        .catch(err => next(err))
})

router.post('/', (req,res,next) =>{
    Projects.createProject(req.body)
        .then(newProject =>{
            res.status(201).json(newProject)
        })
        .catch(err => next(err))
});

module.exports = router;