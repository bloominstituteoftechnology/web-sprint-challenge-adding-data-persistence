exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        { task_description: 'foo', project_id: 1 },
        { task_description: 'bar', task_notes: 'Cry Happy Tears', project_id: 1 },
        { task_description: 'foo-bar', task_notes: 'Have fun!', task_completed: 1, project_id: 2 }
    ])
}