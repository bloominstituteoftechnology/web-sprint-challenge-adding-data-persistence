const db = require("../data/config")

// GET REQUESTS

function getProjects() {
  return db("projects as p")
    .select("p.id as project_id", "p.name as project_name", "p.description", "p.completed")
}

function getProjectByID(project_id) {
  return db("projects as p")
    .select("p.id as project_id", "p.name as project_name", "p.description", "p.completed")
    .where("p.id", project_id)
}

function getProjectResources(project_id) {
  // SELECT
  // 	p.id project_id,
  // 	r.name resources
  // FROM projects AS p
  // INNER JOIN projects_resources AS p_r ON p.id = p_r.project_id
  // INNER JOIN resources AS r ON p_r.resource_id = r.id
  // WHERE p.id = ?;
  return db("projects as p")
    .where("p.id", project_id)
    .select("p.id as project_id", "r.name as resouces")
    .innerJoin("projects_resources as p_r", "p.id", "p_r.project_id")
    .innerJoin("resources as r", "p_r.resource_id", "r.id")
}

function getProjectTasks(project_id) {
  // SELECT
  // 	p.id project_id,
  //  p.name project_name,
	//  p.description project_description,
  // 	t.description,
  // 	t.notes
  // FROM projects AS p
  // INNER JOIN tasks AS t ON p.id = t.project_id
  // WHERE p.id = ?;
  return db("projects as p")
    .where("p.id", project_id)
    .select("p.id as project_id", "p.name as project_name", "p.description as project_description", "t.description as task_description", "t.notes as task_notes", "t.completed")
    .innerJoin("tasks as t", "p.id", "t.project_id")
}

// POST REQUESTS

function addProject(project) {
  return db("projects").insert(project)
}

function addResource(resource) {
  return db("resources").insert(resource)
}

function addTask(task) {
  return db("tasks").insert(task)
}

module.exports = {
  getProjects,
  getProjectByID,
  getProjectResources,
  getProjectTasks,
  addProject,
  addResource,
  addTask,
}