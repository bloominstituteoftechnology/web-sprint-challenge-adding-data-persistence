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
module.exports = router