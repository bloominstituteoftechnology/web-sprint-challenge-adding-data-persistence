exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
      { resource_name: 'Computer', description: 'You use this to complete your projects and exams'}
    ]);
  };