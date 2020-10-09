const express = require("express");
const router = express.Router();
const Project = require("./projecct-model");
const Tasks = require("../tasks-routes/tasks-model");
// When adding a project makse sure that all the proper things are on it
function bodyCheck(req, res, next) {
  if ((req.body.name && req.body.completed) || req.body.completed == false) {
    next();
  } else {
    res.status(400).json({
      Message: "Please include a name or if the project has been completed!",
    });
  }
}
// Checks to make sure when adding a task the proper things are in place
function taskBodyCheck(req, res, next) {
  if (req.body.description && req.body.project_id && req.body.completed || req.body.completed == false) {
    next();
  } else {
    res.status(400).json({
      Message:
        "Please add one of the following: project_id, description or completed status",
    });
  }
}
// Gets all the projects
router.get("/", (req, res) => {
  Project.findProject()
    .then((resp) => {
      res.status(200).json({ Projects: resp });
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
//Gets a project by the id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Project.projectById(id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
// Gets a projects tasks by the projects id
router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;
  Tasks.findTasks(id)
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      res.status(500).json({ Error: "Server Could not Find Tasks" });
    });
});
// Adding a project
router.post("/", bodyCheck, (req, res) => {
  const newProject = req.body;
  Project.addProject(newProject)
    .then((resp) => {
      res.status(201).json({ NewProject: resp });
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
// adding tasks to a project 
router.post("/:id/tasks", taskBodyCheck, (req, res) => {
  const newTask = req.body;
  const id = req.params.id;
  Tasks.addTasks(id, newTask)
    .then((resp) => {
      res.status(201).json({ NewTask: resp });
    })
    .catch((err) => {
      res.status(500).json({ Message: "Server could not add your task", err});
    });
});

module.exports = router;
