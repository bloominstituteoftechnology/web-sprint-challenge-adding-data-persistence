const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('tasks as t')
        .select(
            'p.project_name',
            'p.project_description',
            't.id',
            't.task_description'
        )
        .join('projects as p', 'p.id', 't.projects_id');
}

function findById(id) {
    return db('tasks')
        .where({ id });
}

function add(tasksData) {
    return db('tasks')
        .insert(tasksData);
}