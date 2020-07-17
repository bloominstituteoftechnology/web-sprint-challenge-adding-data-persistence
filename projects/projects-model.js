const db = require("../data/db-config")

module.exports ={
    findById,
    find
}

//get a list of projects
function find(){
    return db("projects")
}


//get project by id 
function findById(id){
    return db('projects')
        .where({id})
        .first()
}