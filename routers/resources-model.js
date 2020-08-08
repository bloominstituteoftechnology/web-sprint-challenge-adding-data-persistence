const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('resources')
}

function findById(id) {
    return db('resources')
        .where({ id });
}

function add(resourcesData) {
    return db('resources')
        .insert(resourcesData);
}