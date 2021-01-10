const db = require('./data/config')

function addRes(res){
    return db('resource').insert(res)
}

function getRes() {
    return db('resource')
}
module.exports = {
    addRes,
    getRes,
}