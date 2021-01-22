// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');
const router = express.Router();

// curl -X GET http://localhost:5000/api/resources
router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll();
        res.status(200).json(resources);
    } catch (err) {
        next(err);
    }
})

// curl -d '{"resource_name":"bar","resource_description":null}' -H 'Content-Type: Application/json' -X POST http://localhost:5000/api/resources
router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resource.insert(req.body);
        res.status(201).json(newResource);
    } catch (err) {
        next(err);
    }
})


router.use((err, req, res, next) => {
    res.status(500).json({
        info: 'something happnede inside the router',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;