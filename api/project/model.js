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


module.exports = {
    findProject,
    findProjectById,
}