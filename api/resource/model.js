// build your `Resource` model here
const db = require('../../data/dbConfig')
function getResources() {
    return db('resources')
}

async function addResource(resource) {
return db('resources').insert(resource)
    .then(() => {
    return db('resources')
    .select('resources.resource_name')
    .first()
})}

module.exports = {
    getResources,
    addResource,
}