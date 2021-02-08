// build your `/api/tasks` router here

const express = require('express');
const router = express.Router();
const taskModel = require('./model');

//POST - /api/tasks

router.post('/', async(req, res, next)=>{
    
    await taskModel.insert(req.body)
    .then(response=>{
        res.status(200).json({
            message: 'Task was added successfully',
            task: req.body
        })
    }).catch(err=>{
        next(err);
    })
})

//GET - /api/tasks

router.get('/', async (req, res, next)=>{
    const tasks = await taskModel.get()
    if(tasks){
        res.status(200).json({
            tasks: tasks
        })
    }else{
        res.status(400).json({
            message: `Could not retrieve tasks at this time.`
        })
    }
})

//
module.exports = router;
