// build your `Resource` model here
const db= require("../../data/dbConfig")

function find() {
    return db("resources")
    .select("*");
}

function add(resource) {
    return db("resources")
        .insert(resource)
        .into("resources")
}

module.exports={
    find,
    add
}