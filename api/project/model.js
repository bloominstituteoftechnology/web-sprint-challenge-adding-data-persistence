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

function addProject(project) {
    const [id] = db("project").insert(project)
    return findProjectById(id)
}

module.exports = {
    findProject,
    findProjectById,
    addProject,
}