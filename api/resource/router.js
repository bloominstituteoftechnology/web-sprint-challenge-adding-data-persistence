// build your `/api/resources` router here
const express = require('express');

const Resources = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => next(err))
})

router.post('/', (req,res,next)=>{
    const newResource = req.body
    Resources.createProject(newResource)
    .then(resource=>{
        res.status(200).json(resource)
    })
    .catch(err => next(err))
})

router.use((err, req, res) => { 
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;