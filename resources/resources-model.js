const db = require("../data/config")

function find(){
    return db("resources")
}
function add(resource){

    return db("resources as s")
    .insert(resource)
}
module.exports = {
    find,
    add   
}