// build your `Resource` model here

const db = require('../../data/dbConfig');


function find() {
    return db('resources');
}


module.exports = {find}