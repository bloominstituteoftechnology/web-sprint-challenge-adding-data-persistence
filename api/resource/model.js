// build your `Resource` model here
const db = require('../../data/dbConfig');

const find = (id) => {
    if (id) {
        return db('resources')
            .where('resource_id', id)
            .first()
    } else {
        return db('resources')
    }
}

const create = (resource) => {
    return db('resources')
        .insert(resource,"resource_id")
        .then(([resource_id])=> db('resources')
        .where({resource_id})
        .first())
}

module.exports = {
    find,
    create
}