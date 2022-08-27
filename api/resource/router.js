// build your `/api/resources` router here
const express = require('express');
const resourcesModel = require('./model');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const resources = await resourcesModel.find()
        res.status(200).json(resources)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

module.exports = router;