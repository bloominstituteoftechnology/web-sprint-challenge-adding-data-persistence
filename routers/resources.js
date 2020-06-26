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

module.exports = router