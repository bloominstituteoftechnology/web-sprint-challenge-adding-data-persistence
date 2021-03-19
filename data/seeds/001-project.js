exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('project').del()
      .then(function () {
        // Inserts seed entries
        return knex('project').insert([
          {project_name: 'project 1', project_description: 'description 1'},
          {project_name: 'project 2', project_description: 'description 2'},
          {project_name: 'project 3', project_description: 'description 3'}
        ]);
      });
  };