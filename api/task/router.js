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

router.post('/', (req, res, next) => {
    Task.post(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => {
            next(err)
        })
});

router.put('/:id', (req, res, next) => {
    Task.update(req.params.id, req.body) 
        .then (updatedTask => {
            res.status(200).json(updatedTask);
        })
        .catch(err => {
            next(err)
        })
});

router.delete('/:id', (req, res, next) => {
    Task.remove(req.params.id)
        .then(deletedTask => {
            res.status(200).json({message: "task is deleted."})
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