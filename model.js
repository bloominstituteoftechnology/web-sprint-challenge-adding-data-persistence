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
module.exports = {
    addRes,
    getRes,
    addPro,
    getPro
}