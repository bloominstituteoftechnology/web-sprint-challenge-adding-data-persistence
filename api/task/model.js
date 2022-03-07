// build your `Task` model here
const db = require('../../data/dbConfig.js');

function getTasks() {
    return db('tasks as t')
        .select('t.*', 'p.project_name', 'p.project_description')
        .join('projects as p', 'p.project_id', 't.project_id');
}

async function insert(task) {
    const [task_id] = await db('tasks').insert(task);
    return getTasks().where({ task_id }).first();
}


module.exports = { getTasks, insert };