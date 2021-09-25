
exports.seed = function(knex) {

  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {task_id: 4, resource_id: 5},
        {task_id: 5, resource_id: 6},
        {task_id: 5, resource_id: 7},

      ]);
    });
};
