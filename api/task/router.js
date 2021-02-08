// build your `/api/tasks` router here
const express = require("express")
const router = express.Router();

const Tasks = require("./model");

router.get("/", (req,res) => {
    Tasks
    .getAll()
    .then((tasks) => {
        res.status(200).json(tasks)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
})

router.get("/:id", (req,res) => {
    const { id } = req.params;

    
    Tasks.getByID(id)
    .then((tasks) => {
        res.status(200).json(tasks)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
})

router.post("/", (req,res) => {
    const data = req.body;

    Tasks
    .create(data)
    .then((tasks) => {
        res.status(201).json(tasks[0])
    })
    .catch((err) => {
        res.status(500).json(err)
    })

})

module.exports = router;