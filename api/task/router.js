// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model');
const { checkTasksPayload } = require("../middleware");


router.get('/', async (req, res, next) => {
  try {
    const allTasks = await Tasks.getAll();
    res.json(allTasks);
  } catch(err) { next(err) }
})

router.post('/', checkTasksPayload, async (req, res, next) => {
  try {
    const newTask = await Tasks.create(req.body)
    res.status(201).json(newTask);
  } catch(err) { next(err) }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: 'something went wrong inside the TASKS router',
      errMessage: err.message,
    })
})

module.exports = router;