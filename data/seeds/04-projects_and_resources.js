
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects_and_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_and_resources').insert([
        {
          id: 1,
          project_id: 1,
          resource_id: 1
        },
        {
          id: 2,
          project_id: 2,
          resource_id: 2
        },
      ]);
    });
};
