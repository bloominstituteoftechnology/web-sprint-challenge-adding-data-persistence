const db = require('../data/config')

module.exports = {
    getTasks,
    addTask
};

function getTasks(){
    return db('tasks')
        .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'projects.name', 'projects.description')
        .join('projects', 'tasks.project_id', 'projects.id')
};
function addTask(task){
    return db('tasks')
    .insert(task)
    .then( list => {
        return  db('tasks')
        .select('*')
        .where({ id: list })
        .first()
    })
}