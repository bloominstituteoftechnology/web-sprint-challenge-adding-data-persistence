const db = require('./data/config')

function addRes(res){
    return db('resource').insert(res)
}
module.exports = {
    addRes,
}