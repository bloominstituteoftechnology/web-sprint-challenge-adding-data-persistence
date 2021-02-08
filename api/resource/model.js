// build your `Resource` model here
const db = require("../../data/dbConfig");

function find() {
  return db("resources");
}

function insert(newResource) {
  return db("resources").insert(newResource);
}

module.exports = {
  find,
  insert,
};
