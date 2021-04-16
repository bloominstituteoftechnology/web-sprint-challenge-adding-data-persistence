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

const getById = async (id) => {
    const task = await db('tasks')
        .where('task_id', id)
        .first()
        .select('task_completed', 'task_description', 'task_notes')

        if(task.task_completed === 0){
            task.task_completed = false
        }else{
            task.task_completed = true
        }

        return task;
}

const post = (newTask) => {
    return db('tasks')
        .insert(newTask)
        .then(id => {
            return getById(id);
        });
};

const update = (id, changes) => {
    return db('tasks')
        .where('task_id', id)
        .update(changes);
};

const remove = (id) => {
    return db('tasks')
        .where('task_id', id)
        .delete();
}

module.exports = {
    get,
    getById,
    post,
    update,
    remove
}