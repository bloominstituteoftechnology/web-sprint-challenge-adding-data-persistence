// build your `Task` model here
const db = require("../../data/dbConfig");

function findTask() {
    return db("task")
        .leftJoin("project", "task.project_id", "project.id")
        .select("task.id", "task.name", "project.name as project_name", "project.description")
}

function findTaskById(id) {
    return db("task")
        .where("task.id", id)
        .leftJoin("project", "task.project_id", "project.id")
        .select("task.id", "task.name", "project.name as project_name", "project.description")
}

module.exports = {
    findTask,
    findTaskById
}