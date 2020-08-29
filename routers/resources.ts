import express from 'express';
import * as db from "../models/resources";


export const resourceRouter = express.Router();


//create
resourceRouter.post("/:projectId", async (req, res)=>{
    try {
        const newResource = db.createResource(req.body, req.params.projectId);
        res.status(201).json(newResource);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error creating resource"});
    }
});

//read
resourceRouter.get("/project/:id",  async (req, res) => {
    try {
        const projectResources = await db.getResources(req.params.id);
        res.status(200).json(projectResources);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting project resources"});
    }
});

resourceRouter.get("/:id",  async (req, res) => {
    try {
        const resource = await db.getResource(req.params.id);
        res.status(200).json(resource);
    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error getting resource"});
    }
});

//update



//delete