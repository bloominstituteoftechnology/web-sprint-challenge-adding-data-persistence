// build your `Task` model here
const db = require('../../data/dbConfig.js')

function getTasks() {
    return db('tasks');
}

async function insert(task) {
    const [task_id] = await db('tasks').insert(task);
    return getProject().where({ task_id }).first();
}


module.exports = { getTasks, insert };