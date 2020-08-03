
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "Demolish Kitchen", project_id:1, resource_id:1},
        {description: "Dug up Pool", project_id:2, resource_id:2}
      ]);
    });
};
