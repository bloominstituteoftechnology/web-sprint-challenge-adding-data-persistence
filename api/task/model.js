// build your `Task` model here
const db = require('../../data/dbConfig');



function find() {
    return db('tasks')
}

module.exports = { find };