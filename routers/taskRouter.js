const express = require('express')

const router = express.Router()

const db = require('../data/db-config')


router.get('/', (req,res) => {
    db.getAllTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/', (req,res) => {
    db.insertTask(req.body)
        .then(res.status(200).json(req.body))
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;