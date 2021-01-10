// build your `Task` model here
const db = require("../../data/dbConfig");

function findTask() {
    return db("task");
}

function findTaskById(id) {
    return db("task")
        .where("id", id)
        .first()
}

module.exports = {
    findTask,
    findTaskById
}