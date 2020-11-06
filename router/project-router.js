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
    Project.findName()
    .then((projects) => {
        res.status(200).json(projects)
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    })
 })

// @desc			Get a name by id
// @route			GET /:id
router.get('/:id', (req, res) => {  
    Project.getById(req.params.id)
    .then(project => {
        if(!project.length){
            res.json({ message: 'no project with said id'})
        } else {
            res.json(data[0])
        }
    })
    .catch(error => {
        res.json({message: error.message})
    })
  })

 // @desc			Add a new name
// @route			POST /
router.post('/', (req, res) => { 
    Project.create(req.body)
    .then(project => {
        res.json(project)
    })
    .catch(error => {
        res.json({message: error.message})
    })
   })

// @desc			Update a name by id
 // @route			PUT /:id
 router.put('/:id', async (req, res) => {
     try{
         await Project.update(req.params.id, req.body)
         const updatedProject = await Project.getById(req.params.id).first()
         res.json(updatedProject)
     } catch (error){
         res.json({message: error.message})
     }
     })

// @desc			Remove a name by id
// @route			DELETE /:id
// router.delete('/:id', async (req, res) => {  
    
      
      
//     }

module.exports = router