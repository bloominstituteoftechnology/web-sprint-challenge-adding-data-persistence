// build your `Project` model here


const db = require('../../data/dbConfig');


function find() {
    
    return db('projects');
}

module.exports = { find }