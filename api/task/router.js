// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.find()
        .then(tasks => {
            
            tasks.forEach(task => {
                if(task.task_completed === 1) {
                    task.task_completed = true
                } else {
                    task.task_completed = false
                }
            });

            res.json(tasks)
        
        })
        .catch(next)
})

router.get('/:task_id', (req, res, next) => {
    Tasks.findById(req.params.task_id)
        .then(task => {
            
            if(task.task_completed === 1) {
                task.task_completed = true
            } else {
                task.task_completed = false
            }

            res.json(task)

        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.create(req.body)
        .then(task => {
            res.json(task)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        checkPoint: "If you're seeing this, you probably did something wrong...",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router