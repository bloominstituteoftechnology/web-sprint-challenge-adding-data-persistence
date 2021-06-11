// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

function findById(resource_id) {
    return db('resources').where('resource_id', resource_id)
}

async function create(resource) {
    const [id] = await db('resources').insert(resource)
    return findById(id)
}

module.exports = {
    getResources,
    findById,
    create,
}