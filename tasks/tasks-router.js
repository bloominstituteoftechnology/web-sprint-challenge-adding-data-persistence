const express = require("express")

const Tasks = require('./tasks-model')

const router = express.Router()

  //post a task
  router.post('/', (req, res) => {
    const newTask = req.body;
  
        Tasks.add(newTask)
            .then(task => {
                res.status(201).json(task)
            })
            .catch (err => {
                res.status(500).json({ message: 'Failed to create new task' });
            });
  });

router.get("/", (req, res)=> {
    Tasks.getTasks()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get tasks'})
        })
})

module.exports = router