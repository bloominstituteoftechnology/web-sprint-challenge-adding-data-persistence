
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('resources').del()
    // .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: "computer", resource_description: 'Device used to enter data'},
        { resource_name: "phone", resource_description: 'Device used view data'},
        { resource_name: "books", resource_description: 'Information stored on pages'}
      ]);
    // });
};
