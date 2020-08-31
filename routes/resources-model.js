const db = require("../data/config")

function add(resources){
    return db('resources')
    .insert(resources)
}


module.exports ={
    
    add
    
}