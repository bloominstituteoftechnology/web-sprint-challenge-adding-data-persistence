
exports.seed = function(knex) {
  return knex('project_resource').insert([
    {resource_id: 1, project_id: 1, res_pro_desc: 'clean house make you feel good'},
    {resource_id: 2, project_id: 2, res_pro_desc: 'certificates helps students to extracurricular activities'}
  ])
};
