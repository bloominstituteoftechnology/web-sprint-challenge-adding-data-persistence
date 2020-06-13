const express = require('express')
const task = require('./task-model')

const router = express.Router({
    mergeParams: true,
})

router.get('/', (req,res)=>{
    task.getTask()
    .then(tasks =>{
        res.json(tasks)
    })
})

module.exports =router