const express = require("express")
const task = require("../models/task")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
    try {
        const tasks = await task.getTasks()
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})

module.exports = router