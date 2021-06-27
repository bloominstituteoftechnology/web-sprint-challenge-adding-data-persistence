// build your `Resource` model here
const db = require("../../data/dbConfig.js");

function getResources(){
    return db("resources")
}

function findResourceById(id){
    return db('resources')
    .where({ resource_id: Number(id) }).first()
}

function addResource(resource){
    return db('resources')
    .insert(resource, 'resource_id')
    .then(ids => ({ id: ids[0] }));
}

module.exports = {
    getResources,
    findResourceById,
    addResource,
}