const express = require("express")
const resource = require("../models/resources")

const router = express.Router()

router.get("/resources", async (req, res, next) => {
    try {
        const resources = await resource.getResources()
        res.json(resources)
    } catch(err) {
        next(err)
    }
})

router.post('/resource', (req, res) => {
    const resourceData = req.body;

    resource.addResource(resourceData)
        .then(resource => {
        res.status(201).json(resource);
    })
        .catch (err => {
        res.status(500).json({ message: 'Failed to create new resource' });
    });
})

module.exports = router