const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
}

function addTask(task) {
    return db('tasks').insert(task)
        
}

module.exports = {
    getTasks,
    addTask,
};
