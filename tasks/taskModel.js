const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    add,
    findByProjectId,
};

function find() {
    return db("tasks");
}

function findById(id) {
    return db("tasks").where({ id }).first();
}

function findByProjectId(id) {
    return db("tasks").where({ project_id: id });
}

function add(item) {
    return db("tasks")
        .insert(item, "id")
        .then(([id]) => {
            return findById(id);
        });
}