// build your `/api/tasks` router here
const express = require('express');

const Tasks = require('./model.js');

const router = express.Router();

router.get('/api/tasks', (req, res) => {
  Tasks.find()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.post('/api/tasks', (req, res) => {
    const taskData = req.body;
  
    Tasks.add(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new task' });
      });
  });

  module.exports = router;