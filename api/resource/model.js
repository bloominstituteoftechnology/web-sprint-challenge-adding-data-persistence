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

module.exports = {
    findResource,
    findResourceById
}