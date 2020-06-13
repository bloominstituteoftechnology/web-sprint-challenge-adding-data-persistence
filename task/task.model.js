const db =require('../data/connection')

module.exports ={
    getTaskById
}

function getTaskById(id){
    return db('tasks')
}