const express = require('express');
const helpers = require('./model');

const router = express.Router();



router.get('/tasks', (req, res, next) => {
  helpers.getTasks() //INCLUDING PROJECTS NAME
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next);// our custom err handling middleware in server.js will trap this
  });


router.post('/task', (req, res, next) => { // be nice to have task validation midd
  helpers.createTask(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(next);
});



module.exports = router;
