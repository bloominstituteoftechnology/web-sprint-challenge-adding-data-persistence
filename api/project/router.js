// build your `/api/projects` router here
const router = require("express").Router();
const projects = require("./model.js")
const mw = require("./middleware.js")

router.get("/", (req,res)=>{
    projects.find()
    .then(data=>{
        data.map(project=>{
            project.project_completed ? project.project_completed = true : project.project_completed = false
            return project
        })
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err.message);
    })
})

router.post("/", mw.validateProject, (req,res)=>{
    projects.insert(req.body)
    .then(project=>{
        project.project_completed ? project.project_completed = true : project.project_completed = false
        res.status(201).json(project);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json(err.message);
    })
})

module.exports = router;