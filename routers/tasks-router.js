const express = require('express');
const Tasks = require('./tasks-model.js');
const router = express.Router();

router.get('/', (req,res) => {
    Tasks.find()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({
                message:'Failed to get tasks'
            });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Tasks.findById(id)
        .then(task => {
            if (task) {
                res.status(task)
            } else {
                res.status(404).json({
                    message: 'Could not find task based on id'
                });
            }  
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get tasks'
            });
        });     
});

router.post('/', (req, res) => {
    const taskData = req.body;

    Tasks.add(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add task'
            });
        });
});

module.exports = router;