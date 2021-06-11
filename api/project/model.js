// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects')
}

function getById(project_id) {
    return db('projects')
    .where('project_id', id)
    .then(project => {
        return project[0]
    })
}

function create(project) {
    return db('projects')
    .insert(project)
    .then(project => {
        return getById(project[0])
    })
}

module.exports = {
    getProjects,
    getById,
    create
}