// build your `/api/projects` router here
const express = require("express");
const Project = require("../project/model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const project = await Project.findProject()
        res.json(project)
    } catch (err) {
        next(err);
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const project = await Project.findProjectById(req.params.id)
        if (!project) {
            return res.status(404).json({
                Message: "Project with specific Id doesn't exsist"
            })
        }
        res.json(project);
    } catch (err) {
        next(err);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const [project] = await Project.addProject(req.body)
        res.json(project)
    } catch (err) {
        next(err);
    }
})

module.exports = router;