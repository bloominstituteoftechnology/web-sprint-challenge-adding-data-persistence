// build your `/api/tasks` router here
const express = require('express');
const taskModel = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await taskModel.find()
        console.log(tasks)
        res.status(200).json(tasks)
    } catch (error) {

    }
})

router.post('/', (req, res) => {
    const task = req.body;
    // if (task.project_id) {
    console.log(task)
    if (task.task_description && task.project_id) {
        taskModel.insert(task)
          .then(inserted => {
            res.status(201).json(inserted);
          })
    // taskModel.insert(task)
    //     .then(newTask => { res.status(201).json(newTask) })
        .catch(() => res.status(500).json({ message: "Please provide a description" }))
    } else {
        res.status(400).json({ message: "provide a description" });
    }










    // taskModel.insert(req.body)
    //     .then(task => {
    //         if (!task.description) {
    //             res.status(400).json({ message: "Please provide a description" });
    //         } else {
    //             res.status(201).json(task)
    //         }
    //     })
    //     .catch(() => {
    //         res.status(500).json({ message: "Please provide a description" })
    //     })
});


module.exports = router;