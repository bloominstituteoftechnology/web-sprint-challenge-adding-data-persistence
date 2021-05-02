// build your `Project` model here
const db = require("../../data/dbConfig")

function getAll() {
  return db("projects")
}

function getByID(id) {
  return db("projects")
    .where("project_id", id)
    .first()
}

function create (project) {
  return db("projects")
    .insert(project)
    .then(foo => {
      return getByID(foo[0])
  })
}


module.exports = {
  getAll,
  getByID,
  create
}