// build your `Resource` model here
const db = require("../../data/dbConfig");

function find() {
  return db("resource");
}

function insert(newResource) {
  return db("resource").insert(newResource);
}

module.exports = {
  find,
  insert,
};
