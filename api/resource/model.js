// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources')
}

async function addResources(resource) {
    const newResource = await db("resources").insert(resource, "id");
    return db("resources").where("resource_id", newResource);
}

module.exports = {
    getResources,
    addResources
}