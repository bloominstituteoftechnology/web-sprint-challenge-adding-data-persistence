// build your `Task` model here


const db = require('../../data/dbConfig.js')

const getAll = async () => {
    let tasks = await db("tasks")
    return tasks.map(p => {
        return {
            ...p,
            "task_completed": p['task_completed'] == 0 ? false : true
        }
    })
}

const create = async (task) => {
    return await db("tasks").insert(task)
}

module.exports = {
    getAll,
    create,
}