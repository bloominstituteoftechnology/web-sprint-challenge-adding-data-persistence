// build your `Task` model here
const db = require('../../data/dbConfig.js');

const get = async () => {
    const tasks = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 'task_description', 't.task_notes', 
                't.task_completed', 'p.project_name', 'p.project_description');

    const result = tasks.map(task => {
        if(task.task_completed === 0){
            return{
                ...task,
                task_completed: false
            };
        } else {
            return{
                ...task,
                task_completed: true
            };
        }
    })

    return result;
};

module.exports = {
    get
}