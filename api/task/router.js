const express = require("express");
const router = express.Router();

const Tasks = require("./model");

router.get("/", async (req, res, next) => {
    try {
        const tasks = await Tasks.getAll();
        res.status(200).json(tasks);
    } catch (e) {
        next(e);
    }
});
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const list = await Tasks.getById(id);
        res.status(200).json(list);
    } catch (e) {
        next(e);
    }
});
router.post("/", async (req, res, next) => {
    try {
        const addPost = await Tasks.create(req.body);
        res.status(200).json(addPost);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
