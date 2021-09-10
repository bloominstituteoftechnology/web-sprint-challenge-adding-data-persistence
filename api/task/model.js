// build your `Task` model here
// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select('task_id', 'task_description', 
                'task_notes', 'task_completed', 
                'project_name', 'project_description')
}

const addTask = async (task) => {
    const newTask = await db('tasks').insert(task, 'id')
    return await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .where("t.task_id", newTask)
    .select('task_id', 'task_description', 
            'task_notes', 'task_completed', 
            'p.project_id')
}

module.exports = {
    getTasks,
    addTask
}