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
            message: "could not post project"
        })
    }) 
})
module.exports = router