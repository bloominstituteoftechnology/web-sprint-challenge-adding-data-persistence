
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: 'project a name', project_description: 'a description goes here'},
        {project_name: 'another different project'},
        {project_name: 'different project', project_description: 'this is a project'}
      ]);
    });
};
