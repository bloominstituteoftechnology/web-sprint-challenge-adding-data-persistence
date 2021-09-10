// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getTasks()
        const output = tasks.map((e) => {
            return {
                task_id : e.task_id,
                task_description: e.task_description,
                task_notes: e.task_notes,
                task_completed: e.task_completed === 0 ? false : true,
                project_name: e.project_name,
                project_description: e.project_description
            }
        })
        res.json(output)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const task = req.body
    
    try {
        if (!task.task_description || !task.project_id) {
            res.status(400).json({ 
                message: 'task_description or project_id is missing'
            })
        }
        const newTask = await Task.addTask(task)
        const output = {
            task_id: newTask[0].task_id,
            task_description: newTask[0].task_description,
            task_notes: newTask[0].task_notes,
            task_completed: newTask[0].task_completed === 0 ? false : true,
            project_id: newTask[0].project_id,
        }
        res.status(201).json(output)
    } catch (err) {
        next(err)
    }
})

module.exports = router