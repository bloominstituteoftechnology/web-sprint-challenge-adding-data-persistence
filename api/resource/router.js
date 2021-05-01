// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getAllResources()
        .then( resources => {
            res.status(200).json(resources);
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const newResource = req.body;

    Resources.createResource(newResource)
        .then( resource => {
            res.status(201).json(resource);
        })
        .catch(next)
})

module.exports = router;