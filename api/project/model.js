// build your `Project` model here
const db = require("../../data/dbConfig");

function find() {
  return db("project");
}

function insert(newProject) {
  return db("project")
    .returning(["id", "name", "description", "completed"])
    .insert(newProject);
}

module.exports = {
  find,
  insert,
};
