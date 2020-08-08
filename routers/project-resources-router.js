const express = require('express');
const PResources = require('./project-resources-model.js');
const { json } = require('express');
const router =express.Router();

router.get('/', (req, res) => {
    PResources.find()
        .then(project_resources => {
            json(project_resources);
        })
        .catch(err => {
            res.statusCode(500).json({
                message: 'Failed to get project resources'
            });
        });
});

module.exports = router;