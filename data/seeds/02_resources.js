
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: 'Complete Challenge',
          resource_description: 'Build an Awesome DB',
        },
      ]);
    });
};
