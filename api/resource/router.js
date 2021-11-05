const express = require('express')
const Resources = require('./model')
const router = express.Router()

// [GET] /api/resources
router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})
// [POST] /api/resources
router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resources.create(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router