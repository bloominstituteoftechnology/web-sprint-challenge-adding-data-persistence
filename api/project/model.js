const db = require("../config");

function getProjects() {
    return db("project");
}

function findById(id) {
    return db("project").where({ id }).first();
}

function addProject(project) {
    return db("project")
        .insert(project)
        .then(id => {
            return findById(id[0]);
        });
}

function resourcesByProject(id) {
    return db("project as p")
        .where("p.id", id)
        .join("resources as r", "r.project_id", "p.id")
        .select("r.name", "r.description");
}

module.exports = {
    getProjects,
    findById,
    addProject,
    resourcesByProject
};
