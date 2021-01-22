
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_description: 'a task', task_notes: 'this is optional', project_id: 1},
        {task_description: 'a task', task_notes: 'this is optional', project_id: 2},
        {task_description: 'a task', project_id: 1},
      ]);
    });
};
