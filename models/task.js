const db = require("../data/config")

function getTasks() {
    return db("task as t")
        .join("project as p", "p.id", "t.project_id")
        .select("p.id as project id", "t.description as task description", "t.notes as task notes", "t.completed as task completed", "p.name as project name", "p.description as project description")
}

function findById(id) {
    return db("task")
        .where({id})
        .first();
}

function addTask(task) {
    return db("task")
        .insert(task)
        .then(id => {
            return findById(id[0]);
        });
}

module.exports = {
    getTasks,
    findById,
    addTask,
}