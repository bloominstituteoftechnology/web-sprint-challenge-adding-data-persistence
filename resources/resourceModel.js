const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    add,
    addToProject,
};

function find() {
    return db("resources");
}

function findById(id) {
    return db("resources").where({ id }).first();
}

function add(item) {
    return db("resources")
        .insert(item, "id")
        .then(([id]) => {
            return findById(id);
        });
}

function addToProject(item) {
    return db("projects_resources")
        .insert(item)
        .then(([id]) => id);
}