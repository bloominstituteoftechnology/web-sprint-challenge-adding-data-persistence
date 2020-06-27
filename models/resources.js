const db = require("../data/config")

function getResources() {
    return db("resources")
}

function findById(id) {
    return db("project")
        .where({id})
        .first();
}

function addResource(resource) {
    return db("resources")
        .insert(resource)
        .then(id => {
            return findById(id[0]);
        });
}

module.exports = {
    findById,
    getResources,
    addResource,
}