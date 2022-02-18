// build your `/api/tasks` router here
const router = require('express').Router()
const TM = require('./model')

// [GET] /api/tasks
router.get('/', async (req, res, next) => {
    try {
      const tasks = await TM.getAllTasks()
        res.status(200).json(tasks) 
    } catch (err) {
        next(err)  
    }
})

// [POST] /api/projects
router.post('/', (req, res, next) => {
  TM.createTasks(req.body)
    .then(addNewTask => {
        res.status(201).json({
          status: 201,
          task_id: addNewTask[0].task_id,
          task_description: addNewTask[0].task_description,
          task_notes: addNewTask[0].task_notes,
          task_completed: addNewTask[0].task_completed === 0 ? false : true,
          project_id: addNewTask[0].project_id,
        })
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
    })
})

module.exports = router;