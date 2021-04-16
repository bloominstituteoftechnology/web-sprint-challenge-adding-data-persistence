
exports.seed = function(knex) {
  return knex('project_resource').insert([
    {resource_id: 1, project_id: 1, resource_use: 'clean house make you feel good'},
    {resource_id: 2, project_id: 2, resource_use: 'certificates helps students to extracurricular activities'}
  ])
};
