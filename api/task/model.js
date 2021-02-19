// build your `Task` model here
const db = require("../../data/dbConfig"); //need to create data


const getAll = ()  => {
    return db("tasks").innerJoin(
        "projects",
        "projects.project_id",
        "tasks.project_id"
    );
}

const getById = (tasks_id) => {
    return db("tasks").where({ tasks_id });
}

const create = (tasks) => {
    return db("tasks")
        .insert(tasks)
        .then((id) => {
            return getById(id);
        });
}

module.exports = {
    getAll,
    getById,
    create,
};
