// build your `Task` model here
const db = require("../../data/dbConfig");

function find() {
  return db("task");
}

function insert(newTask) {
  return db("task")
    .returning([
      "id",
      "name",
      "description",
      "notes",
      "completed",
      "project_id",
    ])
    .insert(newTask);
}

module.exports = {
  find,
  insert,
};
