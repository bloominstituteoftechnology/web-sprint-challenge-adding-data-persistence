// build your `Project` model here
const db = require("../../data/dbConfig");

function find() {
  return db("projects");
}

function insert(newProject) {
  return db("projects").insert(newProject);
}

module.exports = {
  find,
  insert,
};
