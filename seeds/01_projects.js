
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Web API', project_description: 'Build APIs' },
        { project_name: 'Databases', project_description: 'Learn SQL', project_completed: 1 },
        { project_name: 'Authentication' }
      ]);
    });
};
