const express = require("express");
const db = require("../data/config");
const Project = require("./project-model")

const router = express.Router();

router.get("/projects", async (req,res,next)=>{
    try{
       res.json(await db("projects"))
    }catch(err){
    next(err)
    }
})

router.post("/projects", async (req,res,next)=>{
    const ProjectData = req.body;

    Project.add(ProjectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
})

router.get("/projects/:id/tasks", async (req,res,next)=>{
    Project.FindProjectTasks(req.params.id)
    .then(pt =>{
        res.json(pt)
    })
})
module.exports = router;