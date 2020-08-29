import express from 'express';
import * as db from "../models/projects";


export const projectsRouter = express.Router();


//create
projectsRouter.post("/", async (req, res)=>{
    try {
        const newProject = await db.createProject(req.body);
        res.status(200).json(newProject);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error creating project"});
    }
});


//read
projectsRouter.get("/", async (req, res) => {
    try {
        const projects = await db.getProjects();
        res.status(200).json(projects);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting projects"});
    }
});

projectsRouter.get("/:id", async (req, res) => {
    try {
        const project = await db.getProjectById(req.params.id);
        res.status(200).json(project);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting project"});
    }
});

//update



//delete