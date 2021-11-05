const express = require('express')
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

module.exports = router