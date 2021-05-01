// build your `Resource` model here
const db = require('../../data/dbConfig.js');

async function getAllResources() {
    const resources = await db('resources');

    return resources;
} 

async function createResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return db('resources as r').where('r.resource_id', resource_id).first();
}

module.exports = {
    getAllResources,
    createResource,
} 