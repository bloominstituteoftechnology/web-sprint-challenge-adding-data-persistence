
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {project_name: 'Yoga', project_description: 'lets get bendy'},
    {project_name: 'bullet journal', project_description: 'make a bullet journal'}
  ]);
};
