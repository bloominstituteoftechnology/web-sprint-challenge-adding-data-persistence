const router = require('express').Router()

const Projects = require('../models/projects-model.js')

const currentTime = new Date().toDateString()

// @desc			Test endpoint is working
// @route			/test
router.get('/test', (req, res) => { 
    res.status(200).json({message: 'server running ' + currentTime}) })

// @desc			Get all projects
// @route			GET /
router.get('/', (req, res) => {   
    Projects.findProjects()
    .then(project => {
        res.status(200).json(project)
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
 })

// @desc			Get project by id
// @route			GET /:id
router.get('/:id', (req, res) => {  
    Projects.findProjectbyId(req.params.id)
    .then( project => {
        res.status(200).json(project)
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
  })

  router.get('/:id/tasks', (req, res) => {
      Projects.findProjectTasks(req.params.id)
      .then( tasks => {
          res.status(200).json({tasks})
      })
      .catch((error) => {
        res.status(500).json({error: error.message})
    })
  })

//  // @desc			Add a new project
// // @route			POST /
router.post('/', (req, res) => {  
    Projects.addProject(req.body)
    .then(project => {
        res.status(201).json({project})
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })

  })

// @desc			Update a project by id
 // @route			PUT /:id
//  router.put('/:id', (req, res) => {  
//      Projects.updateProject(req)
//    })

// @desc			Remove a project by id
// @route			DELETE /:id
router.delete('/:id', (req, res) => {  
    db('projects')
    .where({ id: req.params.id })
    .del()
  .then(count => {
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  })
})



module.exports = router