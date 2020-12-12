const db = require('../../data/dbConfig');

module.exports = {
    addTask,
    taskList
};

function addTask(newTask){
    return db('tasks').insert(newTask);
};

function taskList(){
    return db('tasks as t')
    .join('projects as p', 't.pj_id', 'p.id')
    .select('p.pj_name', 'p.pj_descript', 't.task_descript', 't.notes');
};