const express = require('express');

const router = express.Router();

router.use(express.json())

const helper = require('./api/db_helper');


router.get('/resource', (req,res) =>{
    helper.allResources()
        .then(d=>{
            res.status(200).json(d);
        })
        .catch(err=>{
            res.status(500).json({message:"nope"})
        })
})


router.post('/resource', (req, res) =>{

    helper.add(req.body)
        .then(d=>{
            res.status(200).json({message:"item added"})
        })
        .catch(err=>{
            res.status(500).json({message:"unable to add resource"})
        })
})

router.get('/project', (req,res) =>{
    helper.allProjects()
        .then(d=>{
            res.status(200).json(d)
        })
        .catch(err=>{
            res.status(500).json({message:"unable to get projects"})
        })
})

router.post('/project', (req,res)=>{
    helper.addProject(req.body)
        .then(d=>{
            res.status(200).json({message:"Project added"})
        })
        .catch(err=>{
            res.status(500).json({message:"unable to add project"})
        })
})

router.get('/tasks', (req,res)=>{
    helper.allTasks()
        .then(d=>{
            res.status(200).json(d)
        })
        .catch(err=>{
            res.status(500).json({message:"unable to get tasks"})
        })
})

router.post('/tasks/:id', (req, res)=>{
    help.addTask(req.params.id,req.body)
        .then(d=>{
            res.status(200).json({message:"Task added"})
        })
        .catch(e=>{
            res.status(500).json({message:"Unable to add task"})
        })
})

router.get('/project/:id/resources', (req,res)=>{

})

module.exports = router;