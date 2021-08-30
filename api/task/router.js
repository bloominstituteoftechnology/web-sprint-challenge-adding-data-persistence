// build your `/api/tasks` router here
const express = require('express')

const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
      Task.getAll()
            .then((tasks) => {
                  res.json(tasks)
            })
            .catch(next)
})

router.post('/', async (req, res) => {

      try {
            const addTask = await Task.add(req.body)
                  res.status(201).json(addTask)
      }catch(e) {
            res.status(500).json({message: `Can't add the task to our database: ${e}`})
      }
})

module.exports = router;