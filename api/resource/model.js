// build your `Resource` model here
const db = require("../../data/dbConfig")

function get(id) {
    if(id) {
        return db.table("resources")
            .where("resource_id", id)
            .first()
    } else {
        return db.table("resources")
    }
}

function insert(resource) {
    return db("resources")
        .insert(resource, "resource_id")
        .then(([id]) => get(id))
}

function update(id, changes) {
    return db("resources")
        .where("resource_id", id)
        .update(changes)
        .then(count => (count > 0 ? get(id) : null))
}

function remove(id) {
    return db("resources")
        .where("resource_id", id)
        .delete()
}

module.exports = {
    get,
    insert,
    update,
    remove,
};
