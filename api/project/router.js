// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model');
const { checkProjectsPayload } = require("../middleware");


router.get('/', async (req, res, next) => {
  try {
    const allProjects = await Projects.getAll();
    res.json(allProjects);
  } catch(err) { next(err) }
})

router.post('/', checkProjectsPayload, async (req, res, next) => {
  try {
    const newProject = await Projects.create(req.body)
    console.log(newProject)
    res.status(201).json(newProject);
  } catch(err) { next(err) }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: 'something went wrong inside the PROJECTS router',
      errMessage: err.message,
    })
})

module.exports = router;