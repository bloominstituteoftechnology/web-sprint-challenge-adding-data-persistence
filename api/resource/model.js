const db = require('../../data/dbConfig')

function get(){
    return db('resources')
}


function getById(resource_id){
    return db('resources').where({ resource_id }).first()
}

function insert(resource){
    return db('resources').insert(resource)
        .then((ids)=>{
            return getById(ids[0])
        })
}

module.exports = { get, getById, insert}