// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");
const router = express.Router()

router.get("/", (req, res) => {
    Resource.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(error => {
        error.status(500).json({ message: error.message })
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Resource.findResourceById(id)
    .then(resource => {
        if(!resource){
            res.status(404).json("Sorry the resource with the specified id could not be found.")
        } else {
            res.json(resource)
        }
    })
    .catch(error => {
        res.status(500).json({ message: error })
    })
})

router.post('/', (req, res) => {
    const resource = req.body

    Resource.addResource(resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(error => {
        error.status(500).json({ message: error.message })
    })
})

module.exports = router