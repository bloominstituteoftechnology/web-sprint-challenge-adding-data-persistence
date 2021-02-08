// build your `Task` model here
// build your `Resource` model here
const db = require("../../data/dbConfig"); //need to create data

module.exports = {
getAll,
getById,
create,
}

function getAll() {
return db("tasks").innerJoin(
    "projects",
    "projects.project_id",
    "tasks.project_id"
)
}

function getById(tasks_id) {
    return db("tasks").where({tasks_id});
}

function create(tasks) {
return db("tasks")
.insert(tasks)
.then((id) => {
    return getById(id)
})
}
