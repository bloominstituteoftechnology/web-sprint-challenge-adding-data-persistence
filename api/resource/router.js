const express = require('express')
const {validateResource} = require('./middleware')
const Resources = require('./model')
const router = express.Router()

// [GET] /api/resources
router.get('/resources', (req, res, next) => {
    Resources.getAll()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})
// [POST] /api/resources
router.post('/resources', async (req, res, next) => {
    try {
        const newResource = await Resources.create(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router