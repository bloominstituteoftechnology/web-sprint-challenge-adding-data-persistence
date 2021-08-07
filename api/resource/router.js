// build your `/api/resources` router here
const router = require('express').Router();
const { resource } = require('../server.js');
const Resource = require('./model.js');

router.get('/', (req, res, next) => {
    Resource.get()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id', (req, res, next) => {
    Resource.getById(req.params.id)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req, res, next) => {
    Resource.post(req.body)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(err => {
            next(err)
        })
})

router.put('/:id', (req, res, next) => {
    Resource.update(req.params.id, res.body)
        .then(updatedResource => {
            res.status(200).json(updatedResource)
        })
        .catch(err => {
            next(err)
        })
})

router.delete('/:id', (req, res, next) => {
    Resource.remove(req.params.id)
        .then(deletedResource => {
            res.status(200).json({message: 'resource is deleted sucessfully.'})
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