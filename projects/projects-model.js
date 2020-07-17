const db = require("../data/db-config")

module.exports ={
    findById,
    find,
    add
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

//add project
function add(project){
    return db("projects")
    .insert(project, "id")
    .then(([id]) => {
        return findById(id);
    })
    .catch(err => {
        console.log(err)
    })
}