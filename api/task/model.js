const db = require('../../data/dbConfig')

function get(){
    return db('tasks')
}


function getById(task_id){
    return db('tasks').where({ task_id }).first()
}

function insert(task){
    return db('projects').insert(task)
        .then((ids)=>{
            return getById(ids[0])
        })
}

module.exports = { get, getById, insert}

