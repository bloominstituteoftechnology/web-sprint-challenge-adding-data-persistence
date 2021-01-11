// build your `/api/projects` router here
const express = require("express")
const Project = require("model")

const router = express.Router()

router.get("/api/resources", async (request, response) => {
    try {
        let resources = await Project.get()

        return response.status(200).json(resources)
    } catch (error) {
        return response.status(500).json({"message": "unable to get resources"})
    }
})

router.get("", async (request, response) => {})

router.post("/api/resources", async (request, response) => {})

router.put("", async (request, response) => {})

router.delete("", async (request, response) => {})

module.exports = router

