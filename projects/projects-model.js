const db = require("../data/config")

function find(){
    return db("projects")
}
function add(project){
    console.log("test")
    return db("projects as p")
    .insert(project)
}
module.exports = {
    find,
    add   
}