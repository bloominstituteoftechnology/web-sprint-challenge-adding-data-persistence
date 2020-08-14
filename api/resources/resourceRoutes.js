const express = require('express');
const router = express.Router();
const Resources = require('./resourceModel');

router.get('/', (req, res) => {
    Resources.retrieveResources().then( resources => {
        res.status(200).json({resources})
    });
});

router.get('/:id', (req, res) =>{
    Resources.retrieveResourceById(req.params.id).then( resource =>{
        res.status(200).json(resource)
    });
});

router.post('/', (req, res) => {
    Resources.addResource(req.body).then(resource => {
        res.status(201).json({resource});
    }).catch( err => {
        if (err.errno === 19) {
            res.json({error: 'name should be unique'})
        }
    });
});

module.exports = router;
