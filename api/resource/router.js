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

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
    next();
})
module.exports = router;