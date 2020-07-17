const db = require("../data/db-config")

module.exports = {
    get,
    getById,
    getTasks,
    add,
    addTask,
    update,
    remove
}

function get(){
    return db("projects")
}

function getById (id) {
    return db("projects").where({id}).first()
}

function getTasks (id) {
    return db("tasks")
        .join("projects", "tasks.project_id", "projects.id")
        .select("tasks.id", "tasks.decription", "projects.name", "projects.description")
        .where ({project_id: id})
}

function add(project) {
    return db("projects")
        .insert(project, "id")
        .then (([id]) => {
            return getById(id)
        })
}

function addTask(task) {
    return db("tasks")
        .insert(task, "id")
        .then (([id]) => {
            return getById(id)
        })
}

function update (id, updates) {
    return db("projects")
        .where({id})
        .update(updates)
        .then(() => {
            return getById(id)
        })
}

function remove (id) {
    return db("projects")
        .where ({id})
        .del()
        .then (() => {
            return null
        })
}