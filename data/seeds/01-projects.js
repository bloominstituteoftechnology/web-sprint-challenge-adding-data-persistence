exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {project_name: 'Titan', project_description: 'Confidential - L1'},
    {project_name: 'Apex', project_description: 'Confidential - L2'},
    {project_name: 'Phoenix', project_description: 'Confidential - L3'}
  ]);
};
