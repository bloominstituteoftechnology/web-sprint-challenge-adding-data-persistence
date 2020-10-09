const express = require("express");
const router = express.Router();
const Tasks = require("./tasks-model");

// Gets all the tasks for all the projects
router.get('/',(req,res)=>{
    Tasks.allTasks().then(resp=>{
        res.status(200).json({Tasks:resp})
    }).catch(err=>{
        res.status(500).json({Error: "Could not find tasks"})
    })
})



module.exports = router;
