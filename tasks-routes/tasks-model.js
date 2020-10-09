module.exports = {
  findTasks,
  allTasks,
  addTasks,
};

const db = require("../data/db-config");
// This get all the tasks for all the projects
function allTasks() {
  return db("tasks");
}
//This finds all the taks for a specific project 
function findTasks(id) {
  return db("projects")
    .join("tasks", "tasks.project_id", "=", "projects.id")
    .select(
      "projects.name",
      "projects.description",
      "tasks.description as Task",
      "projects.completed AS ProjectCompletion",
      "tasks.completed AS TaskCompletion",
      "tasks.notes"
    )
    .where({ "projects.id": id });
}

// This adds a task to a project
function addTasks(id, task) {
  return db("tasks")
    .where({id })
    .insert(task)
}
// SELECT projects.name, projects.description, tasks.description as Task, projects.completed AS ProjectCompletion, tasks.completed AS TaskCompletion, tasks.notes
// FROM Projects
// Join Tasks ON tasks.project_id = projects.id
