// build your `/api/projects` router here
const Projects = require("./model");
const express = require("express");
const router = express.Router();

router.get("/", (req,res,next) => {
    Projects.getAll()
    .then((projects) =>  {
        res.status(200).json(projects)
    })
    .catch((err) => {
        res.status(500).json(err)
        next(err)
    })
});

router.post("/", checkBody, (req,res,next) => {
    const project = req.project;
    Projects.create(project)
    .then((newID) => {
        const [id] = newID
        const newProject = Projects.getById(id)
        res.status(201).json(newProject)
    })
    .catch((err) => {
        res.status(500).json(err)
        next(err)
    })
});

function checkBody(req,res,next) {
    const project = req.body;

    if(!project || !project.project_name) {
        const err = new Error();
        res.status(400).json(err)
        next(err);
    } else {
        req.project = project;
        next();
    }
}

module.exports = router;