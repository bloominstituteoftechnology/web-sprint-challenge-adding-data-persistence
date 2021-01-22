
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name: 'this is a resource', resource_description: 'a description of this resource'},
        {resource_name: 'this is another resource'},
        {resource_name: 'a resource', resource_description: "I'll describe this"}
      ]);
    });
};
