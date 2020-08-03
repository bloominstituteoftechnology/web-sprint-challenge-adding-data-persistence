
exports.seed = function(knex) {
  //Insert seed entries
      return knex('resource_list').insert([
        {project_id: 1, task_id: 1, resource_id: 1},
        {project_id: 1, task_id: 2, resource_id: 2},
        {project_id: 2, task_id: 3, resource_id: 3},
        {project_id: 2, task_id: 4, resource_id: 6},
        {project_id: 2, task_id: 5, resource_id: 7},
        {project_id: 3, task_id: 6, resource_id: 4},
        {project_id: 3, task_id: 7, resource_id: 1},
        {project_id: 4, task_id: 8, resource_id: 3},
        {project_id: 4, task_id: 9, resource_id: 2},
        {project_id: 5, task_id: 10, resource_id: 5},
        {project_id: 5, task_id: 11, resource_id: 5},
      ]);

};
