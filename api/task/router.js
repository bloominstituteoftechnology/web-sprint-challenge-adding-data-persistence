// build your `/api/tasks` router here
const express=require('express');
const Task=require("./model")
const router=express.Router();
const {validateTaskBody,validateProjectId}=require('../middleware/middleware');

router.get('/',(req,res,next)=>{
  Task.getTasks()
  .then(tasksList=>{
      tasksList.forEach((obj)=>{
        if(obj.task_completed===1){obj.task_completed=true}
        else {obj.task_completed=false}
      })
        res.status(200).json(tasksList)
    })
  .catch(next)
})

router.post('/',validateProjectId,validateTaskBody,(req,res,next)=>{
  Task.addTask(req.body)
  .then(task=>{
    if(task.task_completed===1){task.task_completed=true}
      else {task.task_completed=false}
      res.status(200).json(task)
  })
  .catch(next)
})


router.use((error, req, res, next)=>{
    res.status(500).json({ info: 'There was an error in the router',
  message: error.message,
  stack: error.stack})
  })

module.exports=router