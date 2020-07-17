const db = require("../data/db-config")

module.exports ={
    find,
    add,
    findById
}


//get a list of resources
function find(){
    return db("resources")
}
//get project by id 
function findById(id){
    return db('resources')
        .where({id})
        .first()
}

//add resource
function add(resource){
    return db("resources")
    .insert(resource, "id")
    .then(([id]) => {
        return findById(id);
    })
    .catch(err => {
        console.log(err)
    })
}