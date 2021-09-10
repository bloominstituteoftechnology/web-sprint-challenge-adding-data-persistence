const express = require('express')
const router = express.Router()
const Resource = require('./model')

router.post('/', (req, res, next)=>{
    Resource.insert(req.body)
        .then((r)=>{
            res.status(201).json(r)
        })
        .catch(next)
})

router.get('/', (req, res, next)=>{
    Resource.get()
        .then((r)=>{
            res.status(200).json(r)
        })
        .catch(next)
    })      

    module.exports = router