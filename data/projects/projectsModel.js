const db = require('../dbConfig');

function find() {
    return db('projects');
}

module.exports = {
    find
}