// build your `Task` model here
const db = require("../../data/dbConfig.js");

function getTasks(){
    return db('tasks')
}

function findTaskById(id){
    return db('tasks')
    .where({ task_id: Number(id) }).first()
}

function addTask(task){
    return db('task')
    .insert(task, 'task_id')
    .then(ids => ({ task_id: ids[0] }));
}


module.exports = {
    getTasks,
    findTaskById,
    addTask
}