exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('task').del()
      .then(function () {
        // Inserts seed entries
        return knex('task').insert([
          {task_description: 'description 1', project_id: 1},
          {task_description: 'description 2', project_id: 1},
          {task_description: 'description 3', project_id: 1}
        ]);
      });
  };