const express = require("express");
const project = require("../models/project");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
    try {
        const projects = await project.getProjects();
        res.json(projects);
    } catch (err) {
        next(err);
    }
});

router.post("/project", (req, res) => {
    const projectData = req.body;

    project
        .addProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new project" });
        });
});

router.get("/project/:id/resources", (req, res, next) => {
    const { id } = req.params;

    project
        .resourcesByProject(id)
        .then(resource => {
            if (resource.length) {
                res.json(resource);
            } else {
                res.status(404).json({
                    message: "could not find resources for project"
                });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get resources" });
        });
});

module.exports = router;
