// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model.js');

router.get('/', (req, res, next) => {
    Task.get()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id', (req, res, next) => {
    Task.getById(req.params.id)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router;