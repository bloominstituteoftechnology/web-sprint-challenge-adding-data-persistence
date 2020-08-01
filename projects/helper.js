const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findResources,
    findTasks,
    addProject,
    addResource,
    addTask,
    remove
}

function find() {
    return db('projects');
};

function findById(id) {
    return db('projects')
    .where({id})
    .first();
}

function findResources(id) {
    return db("resources")
      .join("projects", "project_id", "projects.id")
      .select(
        "resources.id",
        "resources.resource_name",
        "resource_description",
        "projects.project_name"
      )
      .where({ project_id: id });
  }

function findTasks(id) {
    return db('tasks as t')
    .join('projects as p', 'project_id', 'p.id')
    .select('t.id', 't.task_notes', 't.task_description', 'p.project_name', 'p.project_description')
    .where({ project_id: id})
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(id => {
        return findById(id[0])
    });
}

function addResource(resource) {
    return db("resources")
        .join("projects", "resources.id", "projects.id")
        .select("resources.id", "projects.project_name")
        .where({ project_id: resource.id })
        .first()
        .insert(resource)
        .then((ids) => {
            return findById(ids[0]);
    });
}

function addTask(task) {
    return db("tasks")
      .join("projects", "tasks.id", "projects.id")
      .select("tasks.id", "projects.project_name")
      .where({ project_id: task.id })
      .insert(task)
      .then((ids) => {
        return findById(ids[0]);
      })}
    

function remove(id) {
    return db('projects')
        .where({id}).del();
}
