// build your `Project` model here
const db = require("../../data/dbConfig")

function get(id) {
    if(id) {
        return db.table("projects")
            .where("project_id", id)
            .first()
    } else {
        return db.table("projects")
    }
}

function insert(project) {
    return db("projects")
        .insert(project, "project_id")
        .then(([id]) => get(id))
}

function update(id, changes) {
    return db("projects")
        .where("project_id", id)
        .update(changes)
        .then(count => (count > 0 ? get(id) : null))
}

function remove(id) {
    return db("projects")
        .where("project_id", id)
        .delete()
}

module.exports = {
    get,
    insert,
    update,
    remove,
};
