// build your `Task` model here
const db = require("../../data/dbConfig");

function find() {
  return db("tasks");
}

function insert(newTask) {
  console.log(newTask);
  return db("tasks").insert(newTask);
}

module.exports = {
  find,
  insert,
};
