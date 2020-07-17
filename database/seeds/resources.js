
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'resource 1', description: 'rowValue1'},
        {name: 'resource 2', description: 'rowValue2'},
        {name: 'resource 3', description: 'rowValue3'}
      ]);
    });
};