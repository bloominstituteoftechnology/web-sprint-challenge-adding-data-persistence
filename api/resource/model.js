// build your `Resource` model here
const db = require('../../data/dbConfig.js');

async function getAll() {
    const resources = await db('resources');
    return resources;
} 

async function create(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return db('resources as r').where('r.resource_id', resource_id).first();
}

module.exports = {
    getAll,
    create,
} 