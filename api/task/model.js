// build your `Task` model here
const db = require('../../data/dbConfig');

const getAll = async () => {
    try {
        const tasks = await db('task');
        return tasks
            .map(task => 
                task.task_completed === 0 ? 
                    {...task, task_completed: false} : 
                    {...task, task_completed: true});
    } catch (error) {
        return {error: `could not get tasks`}
    }
}

const getById = async id => {
    try {
        const task = await db('task').where({ task_id: id }).first();
        return {
            ...task, 
            task_completed: task.task_completed === 0 ? 
                false : 
                true
        }
    } catch (error) {
        return {error: `could not get task`}
    }
}

const insert = async record => {
    try {
        const taskId = await db('task')
            .insert(record);
        return getById(taskId[0]);
    } catch (err) {
        return {error: `could not post task`}
    }
}


module.exports ={
    getAll,
    getById,
    insert
}