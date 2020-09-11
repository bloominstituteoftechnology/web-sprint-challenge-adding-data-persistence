const db = require('../data/projects')

module.exports = {
    findProjects,
    findById,
    findResources,
    findTasks,
    addTask,
    addResource,
    addProject,
}

function findProjects() {
    return db('project')
}

function findById(id) {
    return db('project').where({ id})
}

function findTasks(id) {
    return db('project')
    .join('task', 'task.id', 'project.task_id')
    .select('project.id', 'project.description','task.description')
    .where('project.task_id', '=', id)
}

function findResources() {
    return db('resource')
}

function addTask(task) {
    return db('task').insert(task, 'id')
}

function addResource(resource) {
    return db('resource').insert(resource)
}

function addProject(project) {
    return db('project').insert(project)
}