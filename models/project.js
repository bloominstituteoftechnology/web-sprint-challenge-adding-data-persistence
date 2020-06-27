const db = require("../data/config")

function getProjects() {
    return db("project")
}

function findById(id) {
    return db("project")
        .where({id})
        .first();
}

function addProject(project) {
    return db("project")
        .insert(project)
        .then(id => {
            return findById(id[0]);
        });
}

module.exports = {
    getProjects,
    findById,
    addProject,
}