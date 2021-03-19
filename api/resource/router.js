// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll();
        res.status(200).json(resources);
    } catch (err) {
        next(err);
    }
})
router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resource.insert(req.body);
        res.status(201).json(newResource);
    } catch (err) {
        next(err);
    }
})


router.use((err, req, res) => {
    res.status(500).json({
        info: 'There is a problem',
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;