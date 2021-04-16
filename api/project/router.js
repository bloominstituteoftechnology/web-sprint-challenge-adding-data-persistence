// build your `/api/projects` router here
const router = require('express').Router();

const Project = require('./model.js');

router.get('/', (req, res, next) => {
    Project.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id', (req, res, next) => {
    Project.getById(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req, res, next) => {
    Project.post(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(err => {
            next(err)
        })
})

router.put('/:id', (req, res, next) => {
    Project.update(req.params.id, res.body)
        .then(updatedProject => {
            res.status(200).json(updatedProject)
        })
        .catch(err => {
            next(err)
        })
})

router.delete('/:id', (req, res, next) => {
    Project.remove(req.params.id)
        .then(deletedProject => {
            res.status(200).json({message: 'project is deleted sucessfully.'})
        })
        .catch(err => {
            next(err)
        })
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
    next();
})
module.exports = router;