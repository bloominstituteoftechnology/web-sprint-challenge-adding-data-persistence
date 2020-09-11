const knex = require('knex')

const config = require('../knexfile')

const db = knex(config.development)

module.exports = {
    findProjects,
    insertProject,
    findResources,
    insertResource,
    getAllTasks
}

function findProjects() {
    return db('projects')
}

function insertProject(project) {
    return db('projects')
        .insert(project)
}

function findResources() {
    return db('resources')
}

function insertResource(resource) {
    return db('resources')
        .insert(resource)
}

function getAllTasks() {
    return db('tasks as t')
        .select(
            "t.id",
            "t.task_description",
            "p.project_name",
            "p.description",
            "t.notes",
            "t.completed_status"

        )
        .join('projects as p', 'p.id', 't.project_id')
}