const db = require("../data/config")

function getTasks() {
    return db("task as t")
        .join("project as p", "p.id", "t.project_id")
        .select("t.description as task description", "t.notes as task notes", "t.completed as task completed", "p.name as project name", "p.description as project description")
}

module.exports = {
    getTasks,
}