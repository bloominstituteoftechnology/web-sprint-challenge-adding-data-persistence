const db = require('../../data/dbConfig');

module.exports = {
    get,
    insert
}

async function get(){
    return await db('Resources');
}

async function insert(rsrc){
    return await db.insert(rsrc).into('Resources');
}