// build your `Task` model here
const db = require('../../data/dbConfig')

const getAllTasks = async () => {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', '=', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')
        
        const outcome = []

        for (let i = 0; i < tasks.length; i++) {
            let result = {
                task_id: tasks[i].task_id,
                task_description:tasks[i].task_description,
                task_notes: tasks[i].task_notes,
                task_completed: tasks[i].task_completed === 0 ? false : true,
                project_name: tasks[i].project_name,
                project_description: tasks[i].project_description
            }
            outcome.push(result)
        }
        return outcome
}

const createTasks = async (task) => {
    const addTask = await db('tasks').insert(task, 'id')
    return db ('tasks as tk')
        .leftJoin('projects as p', 'tk.project_id', '=', 'p.project_id')
        .where('tk.task_id', addTask)
        .select(
            'task_id', 'task_description', 'task_notes', 'task_completed', 'p.project_id'
        ) 
}

module.exports = {
    getAllTasks,
    createTasks
}