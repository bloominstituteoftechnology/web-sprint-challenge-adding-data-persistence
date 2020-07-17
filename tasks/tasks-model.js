const db = require("../data/dbConfig");

function getTasks() {
  return db("tasks")
    .join("projects", "projects.id", "=", "tasks.project_id")
    .select(
      "projects.name as Project Name",
      "projects.description as Project Description",
      "tasks.description as Task Description",
      "tasks.notes as Task Notes",
      "tasks.completed as Is Task Completed"
    );
}

function addTasks(newTask) {
  return db("tasks").insert(newTask);
}

module.exports = {
  getTasks,
  addTasks,
};
