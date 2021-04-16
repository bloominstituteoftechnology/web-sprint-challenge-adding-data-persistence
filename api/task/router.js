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

module.exports = router;