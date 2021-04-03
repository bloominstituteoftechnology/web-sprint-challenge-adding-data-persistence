// build your `/api/resources` router here


const router = require('express').Router()
const resources = require('./model.js')

router.get('/', async (req, res, next) => {
    const allResources = await resources.getAll()
    res.status(200).json(allResources)
});

router.post('/', async (req, res, next) => {
    if (!req.body) {
        res.status(400).json({ message: 'Fields left empty.' })
    } else if (!req.body.resource_name) {
        res.status(400).json({ message: 'name required' })
    } else {
    const createdResource = await resources.create(req.body)
    res.status(200).json(createdResource)
    }
});


module.exports = router;