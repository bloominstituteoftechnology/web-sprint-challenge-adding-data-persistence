// build your `/api/tasks` router here
const express = require("express");
const Task = require("../task/model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const task = await Task.findTask()
        res.json(task);
    } catch (err) {
        next(err);
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const task = await Task.findTaskById(req.params.id)
        if (!task) {
            return res.status(404).json({
                Message: "Task with specific Id doesn't exsist"
            })
        }
        res.json(task)
    } catch (err) {
        next(err);
    }  
})

module.exports = router;