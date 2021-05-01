// build your `Task` model here
const db = require('../../data/dbConfig.js');


// middleware fuction
const mutIntToBool = (num) => {
    if (num == 0) {
        return false;
    } else {
        return true;
    }
};


async function getAllTasks() {

    const tasks = await db.select('t.*', 'p.project_description', 'p.project_name').from('projects as p').join('tasks as t', 'p.project_id', 't.project_id')
    const mutDta = tasks.map( (task) => {
        task.task_completed = mutIntToBool(task.task_completed);
    }); 

    return tasks;
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task);
    const newTask = await db('tasks as t').where('t.task_id', task_id);
    const mutDta = newTask.map( (task) => {
        task.task_completed = mutIntToBool(task.task_completed);
    });
    return newTask[0];
}

module.exports = {
    getAllTasks,
    createTask,
}; 