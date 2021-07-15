const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/resource', (req, res, next) => {
  helpers.getresource() 
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post('/resource', (req, res, next) => { // it would be nice to have resource validation midd
  helpers.createResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next);
});


module.exports = router;
