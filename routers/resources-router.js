const express = require('express');
const Resources = require('./resources-model.js');
const router = express.Router();

router.get('/', (req,res) => {
    Resources.find()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({
                message:'Failed to get resources'
            });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Resources.findById(id)
        .then(resource => {
            if (resource) {
                res.status(resource)
            } else {
                res.status(404).json({
                    message: 'Could not find resource based on id'
                });
            }  
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get resources'
            });
        });     
});

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.add(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to add resource'
            });
        });
});

module.exports = router;