// build your `Task` model here
const db = require('../../data/dbConfig')

const getAllTasks = async () => {
    const outcome = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t*', 'p.project_name', 'p.project_description' )

        const solution = []
        for(let i = 0; i < outcome.length; i++) {
            let results = {
                task_id: outcome[i].task_id,
                task_description:outcome[i].task_description,
                task_notes: outcome[i].task_notes,
                task_completed: outcome[i].task_completed === 0 ? false : true,
                project_name: outcome[i].project_name,
                project_description: outcome[i].project_description
            }
            solution.push(results)
        }
        return solution
}

const createTasks = async (task) => {
    const id = await db('tasks').insert(task, 'id')
      return db ('tasks as t')
        .leftJoin('projects as p', 't.project_id', '=', 'p.project_id')
        .where('t.task_id', id)
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'p.project_id')
}

module.exports = {
    getAllTasks,
    createTasks
}