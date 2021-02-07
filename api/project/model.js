// build your `Project` model here
const db = require("../../data/dbConfig"); //need to create data

module.exports = {
getAll,
getById,
create,
}

function getAll() {
return db("projects");
}

function getById(project_id) {
    return db("projects").where({project_id});
}

function create(project) {
return db("projects")
.insert(project)
.then((id) => {
    return getById(id)
})
}

