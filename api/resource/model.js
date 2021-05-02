// build your `Resource` model here
const db = require("../../data/dbConfig")

function getAll() {
  return db("resources")
}

function getByID(id) {
  return db("resources")
    .where("resource_id", id)
    .then(foo => {
      return foo[0]
  })
}

function create(resource) {
  return db("resources")
    .insert(resource)
    .then(foo => {
      return getByID(foo[0])
  })
}


module.exports = {
  getAll,
  getByID,
  create
}