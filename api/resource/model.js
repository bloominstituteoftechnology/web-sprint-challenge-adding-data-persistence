// build your `Resource` model here

const db = require('../../data/dbConfig.js');

function getResources() {
    return db('resources');
}

async function createResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return getResources().where({ resource_id }).first();
}

module.exports = {
    getResources,
    createResource
}