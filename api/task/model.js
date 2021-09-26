// build your `Task` model here
const db = require('../../data/dbConfig')

const find = () => {
    return db("tasks")
}

const findById = async task_id => {

    const task = await db('tasks').where({ task_id }).first()

    if(task.task_completed === 1) {
        task.task_completed = true
    } else {
        task.task_completed = false
    }
    
    return task
}

const create = async (newTask) => {

    if(newTask.task_completed === true || newTask.task_completed === 1) {
        newTask.task_completed = 1
    } else {
        newTask.task_completed = 0
    }
    
    const [task_id] = await db("tasks").insert(newTask)

    return findById(task_id)
}

module.exports = {
    find,
    findById,
    create
}