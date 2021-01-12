// build your `Resource` model here
const db = require("../../data/dbConfig");

function findResource() {
    return db("resource");
}

function findResourceById(id) {
    return db("resource")
        .where("id", id)
        .select("*")
        // .first()
}

function addResource(resouce) {
    return db("resource")
        .insert(resouce)
        .into("resource")
}

module.exports = {
    findResource,
    findResourceById,
    addResource
}