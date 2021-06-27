// build your `Project` model here
const db = require("../../data/dbConfig.js");

function getProjects(){
    return db('projects')
}

function addProject(project){
    return db('projects')
    .insert(project, 'project_id')
    .then(ids => ({ id: ids[0] }));
}

function findProjectById(id){
    return db('projects')
    .where({ project_id: Number(id) }).first()
}


module.exports = {
    getProjects,
    addProject,
    findProjectById
}