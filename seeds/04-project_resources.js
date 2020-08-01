exports.seed = function(knex) {
  return knex('project_resources').insert([
    //windchime
    {project_id: 1, resources_id: 1},
    {project_id: 1, resources_id: 2},
    {project_id: 1, resources_id: 3},
    {project_id: 1, resources_id: 4},
    //paper
    {project_id: 2, resources_id: 5},
    {project_id: 2, resources_id: 6},
    {project_id: 2, resources_id: 7},
    {project_id: 2, resources_id: 8},
    //journal
    {project_id: 3, resources_id: 9},
    {project_id: 3, resources_id: 10},
    {project_id: 3, resources_id: 11},
    {project_id: 3, resources_id: 12},
    {project_id: 3, resources_id: 13},
    {project_id: 3, resources_id: 14},
  ]);
};