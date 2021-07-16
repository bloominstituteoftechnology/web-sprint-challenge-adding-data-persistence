const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
}

function addTask() {

}

module.exports = {
    getTasks,
    addTask,
};
