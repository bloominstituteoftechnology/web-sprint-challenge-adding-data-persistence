const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    add,
};

function find() {
    return db("projects");
}

function findById(id) {
    return db("projects").where({ id }).first();
}

function add(item) {
    return db("projects")
        .insert(item, "id")
        .then(([id]) => {
            return findById(id);
        });
}