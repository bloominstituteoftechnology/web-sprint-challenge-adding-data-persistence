const express = require("express")
const Resources = require("./resources-model")

const router = express.Router()

router.get("/resources", async (req, res, next) => {
    try{
        const resources = await Resources.find()
        res.json(resources)
    }
    catch(err){
        next(err)
    }
})
router.post("/resources", (req, res, next) => {
    const resourceData = req.body;
    Resources.add(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create a new resource"})
    })
})

module.exports = router
