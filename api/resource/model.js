// build your `Resource` model here
const db = require("../../data/dbConfig"); //need to create data

module.exports = {
getAll,
getById,
create,
}

function getAll() {
return db("resources");
}

function getById(resource_id) {
    return db("resources").where({resource_id});
}

function create(resource) {
return db("resources")
.insert(resource)
.then((id) => {
    return getById(id)
})
}
