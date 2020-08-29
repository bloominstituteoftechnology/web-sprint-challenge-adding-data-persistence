import express from 'express';
import {getProjects, getProjectById, createProject} from "../models/projects";


export const projectsRouter = express.Router();


//create
projectsRouter.post("/", async (req, res)=>{
    try {
        const newProject = await createProject(req.body);
        res.status(200).json(newProject);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error creating project"});
    }
});


//read
projectsRouter.get("/", async (req, res) => {
    try {
        const projects = await getProjects();
        res.status(200).json(projects);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting projects"});
    }

});


//update



//delete