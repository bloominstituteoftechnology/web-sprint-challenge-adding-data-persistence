// build your `Task` model here
const db = require("../../data/dbConfig");

function find() {
  return db("task");
}

function insert(newTask) {
  console.log(newTask);
  return db("task").insert(newTask);
}

module.exports = {
  find,
  insert,
};
