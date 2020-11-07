const db = require("../knexconfig");


function find(){
    return db('resources')
}

function findById(id){
    return db('resources').where({id}).first()

}

function add(data){
    return db('resources').insert(data)
}

function getProjects(id){
    return db('template').where({"resource_id":id}).join("projects", "project.id", "template.project_id").select('projects.resource_name', 'projects.resource_desc')
}

module.exports = {find, findById, add, getProjects} 