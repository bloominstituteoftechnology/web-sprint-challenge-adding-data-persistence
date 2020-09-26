const db = require('../data/db-config');

function find() {
    return db('projects')
}

function add(projectData) {
    return db('projects').insert(projectData);
}

function findResources() {
    return db('resources')
}

function addResources(resourceData) {
    return db('resources').insert(resourceData);
}

function findById(id) {
    return db('tasks').where({ id });
}


module.exports = {
    find,
    add,
    findResources,
    addResources,
    findById
};