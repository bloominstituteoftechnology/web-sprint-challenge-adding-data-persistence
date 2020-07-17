const db = require("../data/db-config")

module.exports ={
    findById
}

//get project by id 
function findById(id){
    return db('projects')
        .where({id})
        .first()
}