const router = require('express').Router()
const Project = require('./model')


router.post('/', (req, res, next)=>{
    Project.insert(req.body)
        .then((r)=>{
            res.status(201).json(r)
        })
        .catch(next)
})

router.get('/', (req, res, next)=>{
    Project.get()
        .then((r)=>{
            res.status(200).json(r)
        })
        .catch(next)
    })      

    module.exports = router
