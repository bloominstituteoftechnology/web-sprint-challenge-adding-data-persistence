// build your `Resource` model here
const db = require("../../data/dbConfig");

function find() {
  return db("resource");
}

function insert(newResource) {
  return db("resource")
    .returning(["id", "name", "description"])
    .insert(newResource);
}

module.exports = {
  find,
  insert,
};
