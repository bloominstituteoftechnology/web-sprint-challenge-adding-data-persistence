const e = require("express")
const express = require("express")
const Projects = require("../models/project-model")
const router = express.Router()

// GET REQUESTS

router.get("/", async (req, res, next) => {
  try {
    const allProjects = await Projects.getProjects()
    res.json(allProjects)
  } catch(err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    Projects.getProjectByID(id)
      .then(project => {
        if (project) {
          res.json(project);
        } else {
          res.status(404).json({
            message: "Could not find project with given ID."
          })
        }
      })
  } catch(err) {
    next(err)
  }
})

router.get("/:id/resources", async (req, res, next) => {
  try {
    const { id } = req.params
    Projects.getProjectResources(id)
      .then(resource => {
        if (resource) {
          res.json(resource)
        } else {
          res.status(404).json({
            message: "Could not find resources with the given ID."
          })
        }
      })
  } catch(err) {
    next(err)
  }
})

router.get("/:id/tasks", async (req, res, next) => {
  try {
    const { id } = req.params
    Projects.getProjectTasks(id)
      .then(task => {
        if (task) {
          res.json(task)
        } else {
          res.status(404).json({
            message: "Could not find tasks with the given ID."
          })
        }
      })
  } catch(err) {
    next(err)
  }
})

// POST REQUESTS

router.post("/", async (req, res, next) => {
  try {
    const projectData = req.body
    Projects.addProject(projectData)
      .then(project => {
        res.status(201).json(project)
      })
  } catch(err) {
    next(err)
  }
})

router.post("/:id/resources", async (req, res, next) => {
  try {
    const resourceData = req.body
    Projects.addResource(resourceData)
      .then(resource => {
        res.status(201).json(resource)
      })
  } catch(err) {
    next(err)
  }
})

router.post("/:id/tasks", async (req, res, next) => {
  try {
    const taskData = req.body
    Projects.addTask(taskData)
      .then(task => {
        res.status(201).json(task)
      })
  } catch(err) {
    next(err)
  }
})

module.exports = router;