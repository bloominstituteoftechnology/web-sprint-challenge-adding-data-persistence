const db = require('../../data/dbConfig');

module.exports = {
    addRes,
    resList
};

function addRes(newRes){
    return db('resources').insert(newRes);
};

function resList(){
    return db('resources');
};