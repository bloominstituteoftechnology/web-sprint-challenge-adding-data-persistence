// build your `/api/resources` router here
const express = require('express');

const Resources = require('./model.js');

const router = express.Router();

router.get('/', (_, res, next) => {
    Resources.getAll()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => next(err))
})

module.exports = router;