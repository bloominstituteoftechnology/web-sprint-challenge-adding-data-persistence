
exports.seed = function(knex) {
  //Insert seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'get computer'},
        {project_id: 1, description: 'use computer'},
        {project_id: 2, description: 'something about global warming'},
        {project_id: 2, description: 'for or against'},
        {project_id: 2, description: 'who knows'},
        {project_id: 3, description: 'get computer'},
        {project_id: 3, description: 'make dope app'},
        {project_id: 4, description: 'make 3d game'},
        {project_id: 4, description: 'make 2d game'},
        {project_id: 5, description: 'say Hello'},
        {project_id: 5, description: 'world'},
      ]);

};

