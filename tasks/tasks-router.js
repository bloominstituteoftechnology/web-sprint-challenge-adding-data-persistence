const express = require("express")
const Tasks = require("./tasks-model")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
    
    try{
        const task = await Tasks.find()
        res.json(task)
    }
    catch(err){
        next(err)
    }
})

router.post('/tasks', (req, res) => {
    const taskData = req.body;
  
    Tasks.add(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

router.get("/projects/:id/tasks", (req,res) => {
    const {id} = req.params
    Tasks.findTasksById(id)
        .then(tasks =>{
            console.log("test", tasks)
            if (tasks){
                res.json(tasks)
            }
            else {
                res.status(404).json({message: "could not find tasks for given project"})
            }
        })
        .catch(err =>{
            res.status(500).json({message: "Failed to get tasks"})
        })
})
module.exports = router