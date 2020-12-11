exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { project_name: 'Adding Data Persistence', description: 'Web sprint challenge', completed: 0 }
    ]);
  };