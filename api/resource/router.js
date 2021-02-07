// build your `/api/resources` router here
const express = require("express")
const router = express.Router();

const Resource = require("./model")

router.get("/", (req,res) => {
    Resource
    .getAll()
    .then((resources) => {
        res.status(200).json(resources)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
})

router.get("/:id", (req,res) => {
    const { id } = req.params;

    
    Resource.getByID(id)
    .then((resource) => {
        res.status(200).json(resource)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
})

router.post("/", (req,res) => {
    const data = req.body;

    Resource
    .create(data)
    .then((resource) => {
        res.status(201).json(resource[0])
    })
    .catch((err) => {
        res.status(500).json(err)
    })

})

module.exports = router;