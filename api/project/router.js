// build your `/api/projects` router here
const router = require('express').Router()
//const Projects = require('./model');

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: 'something went wrong inside the PROJECTS router',
      errMessage: err.message,
    })
})

module.exports = router;