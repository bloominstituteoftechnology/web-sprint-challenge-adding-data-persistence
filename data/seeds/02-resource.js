
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, name: 'computer', description: 'machine'},
        {id: 2, name: 'nation'},
        {id: 3, name: 'continent'}
      ]);
    });
};
