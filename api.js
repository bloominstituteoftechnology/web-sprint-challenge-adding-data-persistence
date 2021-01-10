const express = require('express')
const Project = require('./model')
const router = express.Router()

router.post('/resource', (req,res) => {
       if(!req.body.name) {
           res.status(500).json({
               message: "Name needed for resource"
           })
       }
       Project.addRes(req.body)
       .then((add) => {
           res.status(201).json(add)
       })
       .catch((err) => {
        console.log(err)
        res.status(500).json({
            message: "could not post resource"
        })
    }) 
})

router.post('/project', (req,res) => {
    if(!req.body.name) {
        res.status(500).json({
            message: "Name needed for project"
        })
    }
    Project.addPro(req.body)
    .then((add) => {
        res.status(201).json(add)
    })
    .catch((err) => {
     console.log(err)
     res.status(500).json({
         message: "could not post project"
     })
 }) 
})

router.post('/task', (req,res) => {
    if(!req.body.description) {
        res.status(500).json({
            message: "Name description for task"
        })
    }
    Project.addTask(req.body)
    .then((add) => {
        res.status(201).json(add)
    })
    .catch((err) => {
     console.log(err)
     res.status(500).json({
         message: "could not post task"
     })
 }) 
})


router.get('/resource', (req,res) => {
    Project.getRes()
    .then((resource) => {
        if(resource) {
            res.status(200).json(resource)
        } else {
            res.status(404).json({
                message: "Resource can not be found"
            })
        }
    })
    .catch((err) => {
        console.log(err)
        next(err)
    })
})

router.get('/project', (req,res) => {
    Project.getPro()
    .then((Project) => {
        if(Project) {
            res.status(200).json(Project)
        } else {
            res.status(404).json({
                message: "Project can not be found"
            })
        }
    })
    .catch((err) => {
        console.log(err)
        next(err)
    })
})

router.get('/task', (req,res) => {
    Project.getTask()
    .then((task) => {
        if(task) {
            res.status(200).json(task)
        } else {
            res.status(404).json({
                message: "Task can not be found"
            })
        }
    })
    .catch((err) => {
        console.log(err)
        next(err)
    })
})
module.exports = router