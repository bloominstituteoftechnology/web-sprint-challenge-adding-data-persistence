exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
      { description: 'Make a migration and seeds', notes: 'This will work with SQLite Studio if done correctly!', completed: 0, project_id: 1 }
    ]);
  }