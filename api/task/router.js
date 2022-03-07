// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model')
const router = require('express').Router();

router.get('/', (req,res,next)=>{
    Tasks.getTasks()
    .then(tasks =>{
        tasks.map(task=>{
            if (task.task_completed === 0){
                task.task_completed = false;
            }else{
                task.task_completed = true;  
            }
        })
        res.status(200).json(tasks);
    })
    .catch(next);
})

router.post('/', (req,res,next)=>{
    Tasks.insert(req.body)
    .then(task =>{
        if (task.task_completed === 0){
            task.task_completed = false;
            res.status(201).json(task);
        }else{
            task.task_completed = true;
            res.status(201).json(task); 
        }
    }).catch(next);
})

module.exports = router;