exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('required_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('required_resources').insert([{
        project_id: 1,
        resource_name: "computer"
      }]);
    });
};