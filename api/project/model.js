const db = require("../../data/dbConfig"); //need to create data

const getAll = () => {
    return db("projects");
};

const getById = (project_id) => {
    return db("projects").where({ project_id });
};

const create = (project) => {
    return db("projects")
        .insert(project)
        .then((id) => {
            return getById(id);
        });
};

module.exports = {
    getAll,
    getById,
    create,
};
