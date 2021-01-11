// build your `Project` model here
const db= require("../../data/dbConfig")

function find() {
    return db("projects")
    .select("*")
    ;
}

function add(project) {
    return db("projects")
        .insert(project)
        .into("projects")
}

module.exports={
    find,
    add
}