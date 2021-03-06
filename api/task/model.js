// build your `Task` model here
const db = require("../../data/dbConfig")

function getTasks() {
    return db("task_id", "task_description", "task_notes", "task_completed", "project_name", "project_description")
    .from("tasks").join("projects", "tasks.project_id", "projects.project_id").orderBy("task_id")
}

async function addTask(task) {
    // again with the conversions 
    if(task[0].task_completed === 1) {
        task[0].task_completed = true
    } else if(task[0].task_completed === 0) {
        task[0].task_completed = false
    }
    const [task_id] = await db("tasks").insert(task)
    return db("*").from("tasks").where({task_id}).first()
}

module.exports = {
    getTasks,
    addTask
}