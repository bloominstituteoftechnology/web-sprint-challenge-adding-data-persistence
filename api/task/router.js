const router = require('express').Router()
const Task = require('./model')


router.post('/', (req, res, next)=>{
    Task.insert(req.body)
        .then((r)=>{
            res.status(201).json(r)
        })
        .catch(next)
})

router.get('/', (req, res, next)=>{
    Task.get()
        .then((r)=>{
            res.status(200).json(r)
        })
        .catch(next)
    })      

    module.exports = router