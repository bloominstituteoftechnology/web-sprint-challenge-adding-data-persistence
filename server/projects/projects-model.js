const db = require('../../data/config')

function getProjects() {
    return db('projects')
        .select('name')
}

function getResources() {
    return db('resources')
        .select('name')
}

function addProject(project) {
    return db('projects')
        .insert(project)
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function addTask(task, id) {
    return db('tasks')
        .insert({...task, project_id: id})
}

function getTasks(id) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .where('t.project_id', id)
        .select('t.*', 'p.name', 'p.description as proj_desc')
}

module.exports = {
    getProjects, getResources, addProject, addResource, addTask, getTasks
}