// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const { checkResource } = require('./middleware')

const router = express.Router()

router.get('/', async (req,res,next) => {
    const data = await Resource.get()
    try {
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

router.post('/', checkResource, async (req,res,next) => {
    const data = await Resource.create(req.body)
    try {
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
})

module.exports = router