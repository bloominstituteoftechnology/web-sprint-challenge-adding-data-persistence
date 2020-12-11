// build your `/api/resources` router here

const express = require('express');

const Resource = require('./model');

const router = express.Router();

router.get('/resources', (req, res) => {
    Resource.getResource()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});
router.post('/resources', (req, res) => {
    Resource.addResource(req.body)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

module.exports = router;