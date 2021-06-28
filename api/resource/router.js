// build your `/api/resources` router here
const express = require('express');
const resources = require('./model')

const router = express.Router()

router.post('/resource', (req, res, next) => {
    resources.createResources()
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(next)
})

router.get('/resource', (req, res, next) => {
    resources.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

module.exports = router