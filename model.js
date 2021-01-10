const db = require('./data/config')

function addRes(res){
    return db('resource').insert(res)
}

function getRes() {
    return db('resource')
}

function addPro(pro){
    return db('project').insert(pro)
}

function getPro() {
    return db('project')
}

function addTask(task){
    return db('task').insert(task)
}

function getTask() {
    return db('task as t')
        .leftJoin('project as p', 'p.id','t.pro_id')
        .select('p.description','p.name','t.description','t.notes')
}

module.exports = {
    addRes,
    getRes,
    addPro,
    getPro,
    addTask,
    getTask
}