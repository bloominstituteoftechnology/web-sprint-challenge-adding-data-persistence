exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { project_name: 'finish this test', description: "you know what this means", completed: 0 }
    ]);
  };