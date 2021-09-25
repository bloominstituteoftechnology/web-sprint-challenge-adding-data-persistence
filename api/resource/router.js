// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.find()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.create(req.body)
})

module.exports = router;