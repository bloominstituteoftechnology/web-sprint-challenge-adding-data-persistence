// build your `/api/resources` router here
const express = require("express")
const {getResources, addResource} = require("./model")

const resourceRouter = express.Router()

resourceRouter.get("/api/resources", (req, res, next) => {
    getResources()
    .then(list => res.json(list))
    .catch(next)
})

resourceRouter.post("/api/resources", (req, res, next) => {
    addResource(req.body)
    .then(newResource => res.json(newResource))
    .catch(next)
})

module.exports = resourceRouter