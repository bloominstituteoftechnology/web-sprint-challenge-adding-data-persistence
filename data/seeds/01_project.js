exports.seed = function (knex) {
  return knex('projects').insert([
    {
      project_name: 'Complete Challenge',
      project_description: 'Build an Awesome DB',
      project_completed: 0
    },
  ]);
};