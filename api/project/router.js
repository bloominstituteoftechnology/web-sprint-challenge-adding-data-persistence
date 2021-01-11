// build your `/api/projects` router here
const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/api/projects', (req, res) => {
  Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.post('/api/projects', (req, res) => {
    const projectData = req.body;
  
    Projects.add(projectData)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new project' });
      });
  });

  module.exports = router;