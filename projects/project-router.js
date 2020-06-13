const express = require('express')
const project = require('./project-model')
const router = express.Router()

const taskRouter =require('../task/task-router')

router.use('/:id/tasks', taskRouter)
router.get('/',(req,res)=>{
project.get()
.then(projects =>{
    res.json(projects)
})
.catch (err => {
    res.status(500).json({ message: 'Failed to retrieve projects' });
  });
})

router.post('/',(req,res)=>{
project.addProject(req.body)
.then(project =>{
    res.status(201).json(req.body)
}).catch(error => {
    // log error to database
    console.log(error)
    res.status(500).json({
        message:'error adding the post'
    })
})


})



// router.post('/', (req,res)=>{
//     const data = req.body
    
//     db('projects')
//     .insert(data)
//     .then(projects =>{
//         res.status(201).json(data)
//     })
//     .catch(err =>{
//         res.status(500).json({message: 'project  info not posted'})
//     })
// })

module.exports = router