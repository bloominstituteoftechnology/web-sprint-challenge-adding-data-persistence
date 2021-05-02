// build your `Task` model here
const db = require("../../data/dbConfig")

function getAll() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description")
}

function getByID(id) {
  return db("tasks as t")
    .where("task_id", id)
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description")
    .then(foo => {
      return foo[0]
  })
}

function create(task) {
  return db("tasks")
    .insert(task)
    .then(foo => {
      return getByID(foo[0])
  })
}


module.exports = {
  getAll,
  getByID,
  create
}