const db = require('../../data/dbConfig');

module.exports = {
    retrieveTasks,
    addTask
};

retrieveTasks = () => {
    return db('tasks')
        .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name as projectName', 'projects.description as projectDescription')
        .join('projects', 'tasks.project_id', 'projects.id');
};

addTask = async (task) => {
    return db('tasks').insert(task).then( idList => {
        return  db('tasks').select('*').where({ id: idList }).first()
    });
};