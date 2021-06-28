const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/projects', (req, res, next) => {
  helpers.getprojects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

router.get('/:project_id', (req,res,next) => {
    helpers.getProjectById(req.params.recipe_id)
      .then(resource => {
          res.status(200).json(resource)
      })
      .catch(next)
})



router.use((err,req,res,next) => {//eslint-disable-line
    res.status(500).json({
       customMessage: 'something went wrong inside the projects router',
       message: err.message,
       stack: err.stack, 
    })
})



module.exports = router;
