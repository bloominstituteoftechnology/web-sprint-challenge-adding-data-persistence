const router = require('express').Router()
const Project = require("../models/projects-model");

const currentTime = new Date(). toDateString()

// @desc			Test endpoint is working
// @route			/test
router.get('/test', (req, res) => { res.status(200).json({message: 'server running ' + currentTime}) })

// @desc			Get all projects
// @route			GET /
router.get('/', (req, res) => {   
    Project.findProject()
    .then((names) => {
        res.status(200).json(names)
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
 })

// @desc			Get project by id
// @route			GET /:id
router.get('/:id', (req, res) => {    })

 // @desc			Add a new project
// @route			POST /
router.post('/', (req, res) => {    })

// @desc			Update a project by id
 // @route			PUT /:id
 router.put('/:id', (req, res) => {    })

// @desc			Remove a project by id
// @route			DELETE /:id
router.delete('/:id', (req, res) => {    })


module.exports = router;