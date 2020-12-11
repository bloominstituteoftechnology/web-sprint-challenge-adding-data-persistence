// build your `/api/resources` router here

const express = require('express');
const router = express.Router();
const Resources = require('./model');

// Checks body for necessary things
function bodyCheck(req, res, next) {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({
      Message: 'Include resource name.',
    });
  }
}
// Gets all resources 
router.get('/', (req, res) => {
  Resources.findResources()
    .then((response) => {
      res.status(200).json({ Resources: response });
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
// Gets resources by id 
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Resources.resourceById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});
// Adds resource 
router.post('/', bodyCheck, (req, res) => {
  const newProject = req.body;
  Resources.addResources(newProject)
    .then((response) => {
      res.status(201).json({ NewProject: response });
    })
    .catch((err) => {
      res.status(500).json({ Error: err.message });
    });
});

module.exports = router;