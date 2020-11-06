exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
      { description: 'write endpoints', notes: "write the endpoints to this assignment", completed: 0, project_id: 1 }
    ]);
  };