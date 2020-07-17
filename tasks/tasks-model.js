const db = require("../data/dbConfig");

function getTasks() {
  return db("tasks")
    .join("projects", "projects.id", "=", "tasks.project_id")
    .select(
      "projects.name as Project Name",
      "tasks.description as Task Description"
    );
}

function addTasks(newTask) {
  return db("tasks").insert(newTask);
}

module.exports = {
  getTasks,
  addTasks,
};
