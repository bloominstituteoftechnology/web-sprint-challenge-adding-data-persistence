const db = require("../data/config");

function add(task) {
  return db("tasks").insert(task);
}

function FindTasks(tasks) {
  return db("tasks as t")
    .select("t.id", "t.description","t.completed", "p.name as projectName", "p.description as ProjectDescriptoon")
    .join("projects as p", "t.project_id", "p.id");
}

module.exports = {
  add,
  FindTasks
};
