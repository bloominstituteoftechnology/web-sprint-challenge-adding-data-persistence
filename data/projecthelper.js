const db = require("../knexconfig");

//get projects
function find() {
  return db("projects");
}

//get project by id
function findById(id) {
  return db("projects").where({ id }).first();
}

//get tasks by project id
function findTasks(pId) {
  return db("tasks")
    .where({ project_id: pId })
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "projects.project_name",
      "projects.project_desc",
      "tasks.task_name",
      "tasks.task_desc",
      "tasks.notes"
    );
}

//get resources (resource helper)

//post project
function add(data) {
  return db("projects").insert(data);
}

function addTask(data) {

  return db("tasks").insert(data);
}

function getResources(id){
  return db('template').where({"project_id":id}).join("resources", "resource.id", "template.resource_id").select('resources.resource_name', 'resources.resource_desc')
}

module.exports = { find, findById, add, findTasks, addTask, getResources };
