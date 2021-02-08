// build your `Task` model here
const db = require('../../data/dbConfig');


module.exports = {
    get, 
    insert
}

async function get(){
    return await db('Tasks');
}

async function insert(task){
    return await db.insert(task).into('Tasks')
}