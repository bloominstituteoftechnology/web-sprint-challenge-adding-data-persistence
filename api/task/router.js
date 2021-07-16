// build your `/api/tasks` router here
const express = require("express")
const Tasks = require("./model")
const {taskmanager} = require("./middleware")



const router = express.Router()

router.get("/", taskmanager, (req, res, next) =>{
    Tasks.getAll()
    .then(tasks =>{
    res.status(200).json(tasks)
    })
    .catch(next)
})

module.exports = router