const express = require('express');
const router = express.Router();

const Projects = require('./projectsModel.js');


router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
      console.log(projects);
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.post("/", (req, res) => {
  const data = req.body;
  Projects.add(data)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;