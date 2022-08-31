// build your `/api/tasks` router here
const express = require('express');
const taskModel = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await taskModel.find()
        res.status(200).json(tasks)
    } catch (error) {

    }
})

router.post('/', (req, res) => {
    taskModel.insert(req.body)
        .then(task => {
            if (!task.description) {
                res.status(400).json({ message: "Please provide a description" });
            } else {
                res.status(201).json(task)
            }
        })
        .catch(() => {
            res.status(400).json({ message: "Please provide a description" })
        })
});


module.exports = router;