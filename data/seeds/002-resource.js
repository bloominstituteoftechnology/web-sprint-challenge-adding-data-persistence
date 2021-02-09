
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name: 'resource 1', resource_description: 'description 1'},
        {resource_name: 'resource 2', resource_description: 'description 2'},
        {resource_name: 'resource 3', resource_description: 'description 3'}
      ]);
    });
};
