import express from 'express';
import * as db from "../models/tasks";


export const taskRouter = express.Router();


//create
taskRouter.post("/:projectId", async (req, res)=>{
    try {
        const newTask = db.createTask(req.body, req.params.projectId);
        res.status(201).json(newTask);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error creating task"});
    }
});

//read
taskRouter.get("/project/:id",  async (req, res) => {
    try {
        const projectTasks = await db.getTasks(req.params.id);
        res.status(200).json(projectTasks);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting project tasks"});
    }
});

taskRouter.get("/:id",  async (req, res) => {
    try {
        const task = await db.getTask(req.params.id);
        res.status(200).json(task);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting task"});
    }
});

//update



//delete