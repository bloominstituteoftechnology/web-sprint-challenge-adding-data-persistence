// build your `/api/projects` router here

const express = require('express');
const router = express.Router();
const Project = require('./model');
const Tasks = require('../task/model');

//project check
function bodyCheck(req, res, next) {
  if ((req.body.name && req.body.completed) || req.body.completed == false) {
    next();
  } else {
    res.status(400).json({
      Message: 'Enter a name!',
    });
  }
}
// Checks to see if everything is in place
function taskBodyCheck(req, res, next) {
  if (req.body.description && req.body.project_id && req.body.completed || req.body.completed == false) {
    next();
  } else {
    res.status(400).json({
      Message:
        'Add one of the following: project_id, description or completed status',
    });
  }
}
// Gets all projects
router.get('/', (req, res) => {
  Project.findProject()
    .then((response) => {
      res.status(200).json({ Projects: response});
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
//Gets project by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Project.projectById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
// Get tasks by projects id
router.get('/:id/tasks', (req, res) => {
  const id = req.params.id;
  Tasks.findTasks(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ Error: 'Server cant find tasks!' });
    });
});
// Adding project
router.post('/', bodyCheck, (req, res) => {
  const newProject = req.body;
  Project.addProject(newProject)
    .then((response) => {
      res.status(201).json({ NewProject: response });
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
// adding tasks 
router.post('/:id/tasks', taskBodyCheck, (req, res) => {
  const newTask = req.body;
  const id = req.params.id;
  Tasks.addTasks(id, newTask)
    .then((response) => {
      res.status(201).json({ NewTask: response });
    })
    .catch((err) => {
      res.status(500).json({ Message: 'Oops, server cant add your task', err});
    });
});

module.exports = router;