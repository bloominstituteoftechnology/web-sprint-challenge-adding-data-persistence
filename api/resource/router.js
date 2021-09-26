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
    console.log(next)
    Resources.create(req.body)
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
        
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        checkPoint: "If you're seeing this, you probably did something wrong...",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;