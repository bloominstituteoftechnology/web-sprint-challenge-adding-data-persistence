// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

const resModel = require('./model')

router.get('/', (req, res, next) => {
    resModel.find()
        .then(resAll => res.json(resAll))
        .catch(next)
})

router.post('/', (req, res, next) => {
    resModel.create(req.body)
        .then(obj => res.json(obj))
        .catch(next);
})


module.exports = router;