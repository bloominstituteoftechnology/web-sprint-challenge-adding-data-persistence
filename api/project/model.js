// build your `Project` model here
const db = require("../../data/dbConfig.js")

function find(){
    return db("projects")
}

function findById(id){
    return db("projects")
    .where("project_id",id)
    .then(data=>{
        return data[0]
    })
}

function insert(project){
    return db("projects")
    .insert(project)
    .then(ids=>{
        return findById(ids[0])
    })
}

module.exports = {find, findById, insert}