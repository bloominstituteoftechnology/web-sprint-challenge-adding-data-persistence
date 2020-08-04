const dbConfig = require("./db-config")

module.exports ={
    find,
    findById
}

function find(){
    return db(DB)
}

function findById(id) {
    return db(DB).where({id}).first();
}