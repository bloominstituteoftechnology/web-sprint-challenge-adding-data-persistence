// build your `/api/projects` router here
const express = require("express")
const {getProjects, addProject} = require("./model")

const projectsRouter = express.Router()

projectsRouter.get("/api/projects", (req, res, next) => {
    getProjects()
    .then(projects => res.json(projects))
    .catch(next)
})

projectsRouter.post("/api/projects", (req, res, next) => {
    addProject(req.body)
    .then(newProject => res.json(newProject))
    .catch(next)
})

module.exports = projectsRouter