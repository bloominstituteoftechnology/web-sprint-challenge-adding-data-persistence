const express = require('express');
const projects = require('./projectsModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    projects.find()
      .then(projects => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
  });

  module.exports = router;