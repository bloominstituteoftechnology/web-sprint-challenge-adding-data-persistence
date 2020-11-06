const router = require('express').Router();
const Project = require('../model/project-model.js');

//routes here
const currentTime = new Date(). toDateString()

// @desc			Test endpoint is working
// @route			/test
router.get('/test', (req, res) => { res.status(200).json({message: 'server running ' + currentTime}) })

// @desc			Get all names
// @route			GET /
router.get('/', (req, res) => {   
    Name.findName()
    .then((names) => {
        res.status(200).json(names)
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
 })

// @desc			Get a name by id
// @route			GET /:id
router.get('/:id', (req, res) => {    })

 // @desc			Add a new name
// @route			POST /
router.post('/', (req, res) => {    })

// @desc			Update a name by id
 // @route			PUT /:id
 router.put('/:id', (req, res) => {    })

// @desc			Remove a name by id
// @route			DELETE /:id
router.delete('/:id', (req, res) => {    })

module.exports = router;