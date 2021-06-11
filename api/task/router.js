// build your `/api/tasks` router here
const express = require('express');
const db = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
 db.getAllTasks()
        .then( tasks => {
            res.status(200).json(tasks);
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const newTask = req.body;
    db.createTask(newTask)
        .then( task => {
            res.status(201).json(task);
        })
        .catch(next)
})

module.exports = router; 