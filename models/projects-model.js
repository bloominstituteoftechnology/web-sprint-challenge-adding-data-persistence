const db = require('../data/config')

module.exports = {
    getProjects,
    getProjectById,
    getResources,
    getTasks,
    addTask,
    addResource,
    addProject,
}

function getProjects() {
    return db('project')
}

function getProjectById(id) {
    return db('project').where({ id})
}

function getTasks(id) {
    return db('project')
    .join('task', 'task.id', 'project.task_id')
    .select('project.id', 'project.description','task.description')
    .where('project.task_id', '=', id)
}

function getResources() {
    return db('resource')
}

function addTask(task) {
    return db('task')
    .insert(task, 'id')
}

function addResource(resource) {
    return db('resource')
    .insert(resource)
}

function addProject(project) {
    return db('project')
    .insert(project)
} 