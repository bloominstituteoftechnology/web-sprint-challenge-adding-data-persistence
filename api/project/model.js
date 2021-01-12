// build your `Project` model here
const db = require("../../data/dbConfig");

function findProject() {
    return db("project");
}

function findProjectById(id) {
    return db("project")
        .where("id", id)
        .first()
}

function addProject(proj) {
    return db("project")
        .insert(proj)
        .into("project")
}

module.exports = {
    findProject,
    findProjectById,
    addProject,
}