
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: "Friend",
          resource_description: "This is the most valuable resource of all"
        },
        {
          resource_name: "Tools",
          resource_description: "No matter the project we need these."
        }
      ]);
    });
};
