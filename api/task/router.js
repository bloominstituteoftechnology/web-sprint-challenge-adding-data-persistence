// build your `/api/tasks` router here

const express = require('express');
const router = express.Router();
const Tasks = require('./model');

// Gets all tasks 
router.get('/',(req,res)=>{
    Tasks.allTasks()
        .then(response => {
        res.status(200).json({Tasks:response})
    }).catch(err =>{
        res.status(500).json({Error: 'Could not find task', err})
    })
})



module.exports = router;